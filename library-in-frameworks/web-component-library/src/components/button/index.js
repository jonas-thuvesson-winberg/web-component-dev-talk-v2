import templateContent from "./index.html";
import styles from "./index.css";

class JLibButton extends HTMLElement {
  #shadowRoot;
  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    const templateRoot = document.createElement("template");
    const x = templateContent;
    templateRoot.innerHTML = `<style>${styles.toString()}</style>${x}`;
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
      case "tag":
        this.#setUpEmitter(newValue);
        break;
    }
  }

  static get observedAttributes() {
    return ["text", "background-color", "tag"];
  }

  disconnectedCallback() {
    this.#shadowRoot.getElementById("jlib-button").removeEventListener("click");
  }

  #setUpEmitter(tag) {
    this.#shadowRoot
      .getElementById("jlib-button")
      .addEventListener("click", () => {
        console.log("click!");
        this.dispatchEvent(
          new CustomEvent(`jlib-${tag}-button-clicked`, {
            bubbles: true,
            composed: true,
          })
        );
      });
  }
}

customElements.define("jlib-button", JLibButton);

export default JLibButton;
