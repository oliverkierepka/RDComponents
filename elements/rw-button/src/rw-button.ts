import { LitElement, html } from "lit-element";

// Extend the LitElement base class
class RwButton extends LitElement {
  label: string;

  constructor(label:string="No Value set") { 
    super();
    this.label = label;
  }

  static get label(): string {
    return this.label;
  }
  
  static set label(newLabel:string) {
    this.label = newLabel;
  }

  handleClick(e: Event): void { 
    console.log(e);
    console.log(this.label + "has been clicked");
  }

  connectedCallback() { 
    super.connectedCallback();  
    console.log("element has been appended to document")
  }

  disconnectedCallback() { 
    console.log("element has been removed from document")
    super.disconnectedCallback();
  }
  
  render(){
    return html`
      <button @click="${this.handleClick}">${this.label}</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('rw-button', RwButton);
