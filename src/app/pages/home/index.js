import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

export class RouterOutlet extends outlet(LitElement) {
    static get properties() {
        return {
            href: {
                type: String
            }
        };
    }
    
    render() {
        return html`
            <h1>Hemlo World</h1>
        `;
    }
}

customElements.define("page-home", RouterOutlet);
