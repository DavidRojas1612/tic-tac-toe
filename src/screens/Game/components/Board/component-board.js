import { html, LitElement } from 'lit-element';
import { sharedStyles } from './styles.js';
import '../Square/component-square.js';

export class Board extends LitElement {
  static get properties() {
    return{
      squares: { type: Array },
      onClick: { type: Function },
      winner: { type: String }
    }
  }

  static get styles() {
    return sharedStyles;
  }

  renderSquare(i) {
    return html`
    <component-square 
      .value=${this.squares[i]}
      .onClick=${this.onClick(i)}
      .disable=${!!this.winner}
    ></component-square>`;
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    window.location.pathname = '/demo/login';
  }

  render() {
    return html`
    <div>
      <button @click=${this.handleLogout}>Logout</button>
      <div class="board-row">
        ${this.renderSquare(0)}
        ${this.renderSquare(1)}
        ${this.renderSquare(2)}
      </div>
      <div class="board-row">
        ${this.renderSquare(3)}
        ${this.renderSquare(4)}
        ${this.renderSquare(5)}
      </div>
      <div class="board-row">
        ${this.renderSquare(6)}
        ${this.renderSquare(7)}
        ${this.renderSquare(8)}
      </div>
    </div>
    `;
  }
}

customElements.define('component-board', Board);