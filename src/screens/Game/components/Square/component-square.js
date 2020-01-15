import { html, LitElement } from 'lit-element';
import { sharedStyles } from './styles.js';
 
export class Square extends LitElement {
  static get properties() {
    return {
      value: {type: String},
      onClick: {type: Function},
      disable: {type: Boolean}
    };
  }

  static get styles() {
    return sharedStyles;
  }

  constructor() {
    super();
    this.value = null;
  }

  render() {
    return html`
      <button ?disabled=${this.disable} class="square" @click="${() => this.onClick()}">
        <span>${this.value}</span>
      </button>
    `;
  }
}

customElements.define('component-square', Square);