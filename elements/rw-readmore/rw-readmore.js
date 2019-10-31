let tmpl = document.createElement('template');
tmpl.innerHTML = `
    <link rel="stylesheet" href="../node_modules/font-awesome/css/font-awesome.min.css">
    <style>
        :host {
            display: block;
        }
        
        :host([hidden]) {
            display: none;
        }
        
        .readmore__content {
            display: none;
        }
        
        :host([show]) .readmore__content {
            display: block;
        }
        
        .readmore__trigger {
            color: green;
        }
        
        .readmore__trigger::after {
            display: inline-block;
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            content: '\f105';
            margin-left: 10px;
        }
        :host([show]) .readmore__trigger {
            color: red;
        }
    </style>
    
    <a href="#readmore" class="readmore__trigger js-readmore__trigger">
        <slot name="readmore-label">Read more Default text</slot>
        <i class="fas fa-angle-right"></i>
    </a>
    <div class="readmore__content">
        <slot name="readmore-content">Please provide Content via slot="readmore-content")</slot>
    </div>`;
class ReweReadmore extends HTMLElement {
    constructor() {
        super();
        this.disabled = false;
    }
    get show() {
        return this.hasAttribute('show');
    }
    set show(val) {
        if (val) {
            this.setAttribute('show', '');
        }
        else {
            this.removeAttribute('show');
        }
        this.toggleReadMore();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        let readmoreTrigger = shadowRoot.querySelector(".js-readmore__trigger");
        if (readmoreTrigger) {
            readmoreTrigger.addEventListener('click', e => {
                console.log(e);
                if (this.disabled) {
                    return;
                }
                this.toggleReadMore();
            });
        }
        console.log("the element is inserted into the DOM.");
    }
    disconnectedCallback() {
        console.log("element is disconnected");
    }
    static get observedAttributes() {
        return ['show', 'disabled'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.disabled) {
            console.log("element is disabled");
            return false;
        }
        if (name || oldValue || newValue) {
            console.log("some attribute changed");
        }
        if (this.show) {
            console.log("we read more");
        }
        else {
            console.log("we read less");
        }
    }
    toggleReadMore() {
        this.toggleAttribute("show");
    }
    sayHello(greeting) {
        var response = greeting || 'Hello World!';
        return 'rw-readmore says, ' + response;
    }
}
customElements.define('rw-readmore', ReweReadmore);
export default ReweReadmore;
