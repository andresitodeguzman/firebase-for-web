import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

export class RouterOutlet extends outlet(LitElement) {
    static get properties() {
        return {
        };
    }
    
    render() {
        return html`
            <slot></slot>
        `;
    }
}

customElements.define("router-outlet", RouterOutlet);
