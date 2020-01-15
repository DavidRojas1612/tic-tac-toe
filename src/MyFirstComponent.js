import { html, LitElement } from 'lit-element';
import { Router } from '@vaadin/router';
import { renderRoute } from './routes/routes.js'
import './screens/Login/user-login.js';
import './screens/Game/game-view.js';
 
export class MyFirstComponent extends LitElement {
  static get properties() {
    return {
      router: { type: Object }
    };
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    const token = localStorage.getItem('token');
    renderRoute (router, token);
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}
