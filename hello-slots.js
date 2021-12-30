componentTag = "jtw-hello-slots"

customElements.define(
  componentTag,
  class HelloSlots extends HTMLElement {
    #shadowRoot;
    constructor() {
      super();
      this.#shadowRoot = this.attachShadow({ mode: "open" });
      const t = document.getElementById("hello-slots-template");
      this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
    }

    connectedCallback() {
      console.log(`${componentTag} connected! :)`);
    }

    disconnectedCallback() {
      console.log(`${componentTag} disconnetcted! :(`);
    }
  }
);
