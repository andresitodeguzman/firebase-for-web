import { LitElement } from "lit-element";

import { template } from './template';
import { style } from './style';

const componentTitle = 'logout';

export class PageComponent extends LitElement {
    static get properties() {
        return {
        };
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
