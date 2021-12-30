customElements.define(
  "jtw-hello-slots",
  class HelloSlots extends HTMLElement {
    #shadowRoot;
    constructor() {
      super();
      this.#shadowRoot = this.attachShadow({ mode: "open" });
      const t = document.getElementById("hello-slots-template");
      this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
    }

    connectedCallback() {
      console.log("I'm connected! :)");
    }

    disconnectedCallback() {
      console.log("I'm disconnected! :(");
    }
  }
);
