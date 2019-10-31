import { LitElement, html } from "lit-element";
class RwButton extends LitElement {
    constructor(label = "No Value set") {
        super();
        this.label = label;
    }
    static get label() {
        return this.label;
    }
    static set label(newLabel) {
        this.label = newLabel;
    }
    handleClick(e) {
        console.log(e);
        console.log(this.label + "has been clicked");
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("element has been appended to document");
    }
    disconnectedCallback() {
        console.log("element has been removed from document");
        super.disconnectedCallback();
    }
    render() {
        return html `
      <button @click="${this.handleClick}">${this.label}</button>
    `;
    }
}
customElements.define('rw-button', RwButton);
