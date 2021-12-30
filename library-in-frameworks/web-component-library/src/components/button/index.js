import templateContent from "./index.html";
import styles from "./index.css";

class JLibButton extends HTMLElement {
  #shadowRoot;
  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    const templateRoot = document.createElement("template");
    console.log(styles);
    templateRoot.innerHTML = `<style>${styles.toString()}</style>${templateContent}`;
    this.#shadowRoot.appendChild(templateRoot.content.cloneNode(true));
  }
}

customElements.define("jlib-button", JLibButton);
