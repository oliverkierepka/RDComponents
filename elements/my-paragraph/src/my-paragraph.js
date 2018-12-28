customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();
            let template = document.querySelector('#my-paragraph');
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateContent.cloneNode(true));

        }
});
