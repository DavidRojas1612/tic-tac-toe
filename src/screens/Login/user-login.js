import { html, LitElement } from 'lit-element';
import MatchesService from '../../services/MatchesService.js';

export class UserLogin extends LitElement {

  static get properties() {
    return {
      form: { type: Object }
    };
  }

  constructor() {
    super();
    this.form = {
      email: '',
      password: ''
    }
  }

  render() {
    return html`
      <form id="outlet" @submit="${this.handleSubmit}" >
        <input name="email" type="text" .value="${this.form.email}" @change="${this.handleOnChange}" placeholder="Enter a email"/>
        <input name="password" type="password" .value="${this.form.password}" @change="${this.handleOnChange}" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    `;
  }

  handleOnChange(e) {
    const target = e.target.name;
    this.form[target] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    window.location.pathname = '/demo';
    MatchesService.onLogin(this.form)
      .then((data) => {
        const token = data.token ? data.token : null;
        localStorage.setItem('token', token);
      }
    );
  }
}

customElements.define('user-login', UserLogin);
