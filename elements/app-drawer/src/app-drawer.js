let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { ... }</style>
  <b>I'm in shadow dom!</b>
  <slot></slot>
`;

class AppDrawer extends HTMLElement {

    // A getter/setter for an open property.
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }

    // A getter/setter for a disabled property.
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();

        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            if (this.disabled) {
                return;
            }
            this.toggleDrawer();
        });
    }

    /* Called every time the element is inserted into the DOM.
       Useful for running setup code, such as fetching resources
       or rendering. Generally, you should try to delay work until this time. */
    connectedCallback() {
        console.log("the element is inserted into the DOM.");
        this.innerHTML = "<b>I'm an element</b>";
    }

    /*	Called every time the element is removed from the DOM. Useful
        for running clean up code. */
    disconnectedCallback() {
        console.log("element is disconnected");
    }

    //attributes to be observed by attributeChangedCallback
    static get observedAttributes() {
        return ['disabled', 'open'];
    }

    // Only called for the disabled and open attributes due to observedAttributes
    attributeChangedCallback(name, oldValue, newValue) {
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
        // TODO: also react to the open attribute changing.
    }

    toggleDrawer() {
        console.log("do something");
    }
}

customElements.define('app-drawer', AppDrawer);
