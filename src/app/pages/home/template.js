import { html } from 'lit-element';

export function template() {
    return html`
        <app-navbar></app-navbar>
        <div class="container">
            <details @click="${this.getInTransit}">
                <summary>
                    <h1>In Transit</h1>
                </summary>
                ${this.list.map(el => html`
                    <app-card>
                        <h3>${el.label}</h3>
                        <p>${el.merchant}</p>
                    </app-card>
                `)}
            </details>


            <details style="margin-top: 80px">
                <summary>
                    <h1>Arrived</h1>
                </summary>
            ${this.arrived.map(el => html`
                <app-card>
                    <h3>${el.label}</h3>
                    <p>${el.merchant}</p>
                </app-card>
            `)}
            </details>

        </div>

        <button class="add_button" @click="${this.addItem}">
           + Add
        </button>
    `;
}