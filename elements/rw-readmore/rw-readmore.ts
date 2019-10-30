let tmpl = document.createElement('template');
//import ReweTheme from '@mrmoree/rw-theme';

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
    disabled: boolean;
    
    // Can define constructor arguments if you wish.
    constructor() {
        super();
        this.disabled = false;
    }

    // A getter/setter for an show property.
    get show() {
        return this.hasAttribute('show');
    }

    set show(val) {
        // Reflect the value of the show property as an HTML attribute.
        if (val) {
            this.setAttribute('show', '');
        } else {
            this.removeAttribute('show');
        }
        this.toggleReadMore();
    }

    /* Called every time the element is inserted into the DOM.
       Useful for running setup code, such as fetching resources
       or rendering. Generally, you should try to delay work until this time. */
    connectedCallback() {

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        // Setup a click listener on <vert-readmore> trigger with the class .readmore__trigger__js
        let readmoreTrigger = shadowRoot.querySelector(".js-readmore__trigger");
        if (readmoreTrigger) {
            readmoreTrigger.addEventListener('click', e => {
                // Don't toggle readmore if it's disabled.
                console.log(e);
                if (this.disabled) {
                    return;
                }
                this.toggleReadMore();
            });
        }
        console.log("the element is inserted into the DOM.");
        //this is the best time to load external data or just do
        //cool stuff with content
    }

    /*	Called every time the element is removed from the DOM. Useful
        for running clean up code. */
    disconnectedCallback() {
        console.log("element is disconnected");
    }

    //attributes to be observed by attributeChangedCallback
    static get observedAttributes() {
        return ['show', 'disabled'];
    }

    // Only called for the disabled and open attributes due to observedAttributes
    attributeChangedCallback(name:string, oldValue:any, newValue:any) {
        if (this.disabled) {
            console.log("element is disabled");
            return false;
        }
        if (name || oldValue || newValue) {
            console.log("some attribute changed")
        }
        if (this.show) {
            console.log("we read more");
        } else {
            console.log("we read less");
        }
    }

    toggleReadMore() {
        this.toggleAttribute("show");
    }

    /**
     * Sometimes it's just nice to say hi.
     *
     * @param {string} greeting A positive greeting.
     * @return {string} The full greeting.
     */
    sayHello(greeting:string) {
        var response = greeting || 'Hello World!';
        return 'rw-readmore says, ' + response;
    }

}

customElements.define('rw-readmore', ReweReadmore);

export default ReweReadmore;

