componentTag = "jtw-hello-slots"

customElements.define(
  "sb-hello-world",
  class HelloWorld extends HTMLElement {
    #shadowRoot;
    constructor() {
      super();
      this.#shadowRoot = this.attachShadow({ mode: "open" });
      const t = document.getElementById("hello-world-template");
      this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
    }
  }
);
