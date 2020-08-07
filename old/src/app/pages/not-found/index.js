import { LitElement, html } from "lit-element";

export class PageComponent extends LitElement {
    static get properties() {
        return {
        };
    }
    
    render() {
        return html`
            <h1>Oops!</h1>
            <p>Page was not found</p>
        `;
    }
}

customElements.define("page-notfound", PageComponent);
