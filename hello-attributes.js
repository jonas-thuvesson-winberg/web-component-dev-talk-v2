componentTag = "jtw-hello-attributes";

customElements.define(
  componentTag,
  class HelloAttributes extends HTMLElement {
    #shadowRoot;
    constructor() {
      super();
      this.#shadowRoot = this.attachShadow({ mode: "open" });
      const t = document.getElementById("hello-attributes-template");
      this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
    }

    connectedCallback() {
      console.log(`${componentTag} connected! :)`);
    }

    disconnectedCallback() {
      console.log(`${componentTag} disconnetcted! :(`);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "target") {
        this.#shadowRoot.getElementById("target").innerHTML = newValue;
      }
    }

    static get observedAttributes() {
      return ["target"];
    }
  }
);
