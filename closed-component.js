customElements.define(
    "jtw-closed",
    class Closed extends HTMLElement {
      #shadowRoot;
      constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: "closed" });
        const t = document.getElementById("open-closed-template");
        this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
      }
    }
  );
  