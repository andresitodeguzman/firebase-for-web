import { html } from 'lit-element';

export function template() {
    return html`
        <app-navbar></app-navbar>
        <div class="container">
            <a href="/">← Back</a>
            <h1>Add Parcel</h1>
            <div>
                <input type="text" class="input" placeholder="Parcel Label" id="label"><br>
                <input type="text" class="input" placeholder="Merchant" id="merchant"><br>
                <button @click="${this.submit}">
                    Add
                </button>
            <div>
        </div>
    `;
}