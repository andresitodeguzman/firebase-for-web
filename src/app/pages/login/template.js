import { html } from 'lit-element';

export function template() {
    return html`
        <div class="container">
            <h1>Welcome!</h1>
            <div>
                <button @click="${this.googleLogin}">
                    Login With Google
                </button>
            <div>
        </div>
    `;
}