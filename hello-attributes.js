customElements.define(
  "jtw-hello-attributes",
  class HelloAttributes extends HTMLElement {
    #shadowRoot;
    constructor() {
      super();
      this.#shadowRoot = this.attachShadow({ mode: "open" });
      const t = document.getElementById("hello-attributes-template");
      this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
    }

    connectedCallback() {
      console.log("I'm connected! :)");
    }

    disconnectedCallback() {
      console.log("I'm disconnected! :(");
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
