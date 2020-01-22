import { html, LitElement } from 'lit-element';
import './components/Board/component-board.js';
import { PLAYER_TYPE } from '../../constants/player.js';
import { calculateWinner } from '../../utils/calculate-winner.js';

export class GameView extends LitElement {
  static get properties() {
    return {
      history: { type: Array },
      xIsNext: { type: Boolean },
      stepNumber: { type: Number },
      winner: { type: String } 
    }
  }

  constructor() {
    super();
    this.history = [{ squares: Array(9).fill(null) }];
    this.xIsNext = true;
    this.stepNumber = 0;
    this.winner = null;
  }

  handleClick(i) {
    const current = this.history.slice(0, this.stepNumber + 1)[this.history.length-1];
    const squares = current.squares.slice();
    if (squares[i]) {
      return;
    }
    squares[i] = this.xIsNext ? PLAYER_TYPE.X : PLAYER_TYPE.O;
    const winner = calculateWinner(squares);
    this.history= this.history.concat([{ squares }]);
    this.xIsNext= !this.xIsNext;
    this.stepNumber= this.history.length - 1;
    this.winner = winner;
  }

  jumpTo (step) {
    this.stepNumber = step;
    this.xIsNext = step % 2 === 0;
    if(this.winner) this.winner = null;
  }

  render() {
    const current = this.history[this.stepNumber];
    const status = this.winner ? `Winner:${this.winner}` : `Next player: ${this.xIsNext ? PLAYER_TYPE.X : PLAYER_TYPE.O}`;
    const moves = this.history.map((i, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        html`<li key="${desc}" className={styles.itemHistory}>
          <button type="button" @click="${() => this.jumpTo(move)}">${desc}</button>
        </li>`
      );
    });
    return html`
    <div className={styles.game}>
      <div className={styles.gameBoard}>
      <component-board
        .squares=${current.squares}
        .onClick=${(i) => this.handleClick(i)}
        .winner=${this.winner}
      ></component-board>
      </div>
      <div className={styles.gameInfo}>
        <h2 className={styles.status}>${status}</h2>
        <ol className={styles.infoContainer}>${moves}</ol>
      </div>
    </div>`;
  }
}

customElements.define('game-view', GameView);
