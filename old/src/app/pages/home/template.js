import { html } from 'lit-element';

export function template() {
    return html`
        <app-navbar></app-navbar>
        <div class="container">
            <h1>In Transit</h1>
            ${this.list.map(el => html`
                <app-card>
                    <h3>${el.name}</h3>
                    <p>${el.status}</p>
                </app-card>
            `)}

            <h1 style="margin-top: 80px">Arrived</h1>
            ${this.list.map(el => html`
                <app-card>
                    <h3>${el.name}</h3>
                    <p>${el.status}</p>
                </app-card>
            `)}

        </div>

        <button class="add_button" @click="${this.addItem}">
           + Add
        </button>
    `;
}