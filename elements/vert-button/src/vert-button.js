var tmpl = document.createElement("template");
tmpl.innerHtml = ` 
   <style>
        :host {
            display: block;
            color: red;
            background-color: blue;
        }
        
        :host([hidden]) {
            display: none;
        }
   </style>
   <p>i am in the shadow root</p>
   <slot name="my-label">please provide a label</slot>
`;

class VertButton extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}

customElements.define('vert-button', VertButton);
