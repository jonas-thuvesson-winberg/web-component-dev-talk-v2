customElements.define(
    "jtw-open",
    class Open extends HTMLElement {
      #shadowRoot;
      constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: "open" });
        const t = document.getElementById("open-closed-template");
        this.#shadowRoot.appendChild(t.content.cloneNode(true)); // deep clone
      }
    }
  );
  