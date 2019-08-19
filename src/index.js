const template = document.createElement('template');


template.innerHTML = `
  <style>
  </style>

  <div>
    Custom Component
  </div>
`;

class CustomComponent extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // Runs First
    static get observedAttributes() {
    }

    //  Runs after a observed attribute is changed or is set
    attributeChangedCallback(name, prevValue, newValue) {
        console.log('Changed')
        this.render();
    }

    render() {
        console.log('Render')
    }
}

window.customElements.define('custom-component', CustomComponent);