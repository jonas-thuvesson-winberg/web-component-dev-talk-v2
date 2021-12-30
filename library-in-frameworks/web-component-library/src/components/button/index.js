import templateContent from "./index.html";
import styles from "./index.css";

class JLibButton extends HTMLElement {
  #shadowRoot;
  #clickHandlerAdded = false;
  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "open" });
    const templateRoot = document.createElement("template");
    templateRoot.innerHTML = `<style>${styles.toString()}</style>${templateContent}`;
    this.#shadowRoot.appendChild(templateRoot.content.cloneNode(true));
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    switch (name) {
      case "text":
        this.#shadowRoot.getElementById("jlib-button-text").innerText =
          newValue;
        break;
      case "background-color":
        this.#shadowRoot.getElementById("jlib-button").style.backgroundColor =
          newValue;
        break;
      case "click-callback":
        this.#shadowRoot
          .getElementById("jlib-button")
          .addEventListener("click", eval(newValue));
        this.#clickHandlerAdded = true;
        break;
    }
  }

  static get observedAttributes() {
    return ["text", "background-color", "click-callback"];
  }

  connectedCallback() {
    if (!this.#clickHandlerAdded)
      this.#shadowRoot
        .getElementById("jlib-button")
        .addEventListener("click", () => {
          console.log("click!");
        });
  }

  disconnectedCallback() {
    this.#shadowRoot.getElementById("jlib-button").removeEventListener("click");
  }
}

customElements.define("jlib-button", JLibButton);
