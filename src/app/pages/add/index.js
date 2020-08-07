import { LitElement } from "lit-element";
import { navigator } from "lit-element-router";

import { template } from './template';
import { style } from './style';

import '../../components/navbar';
import '../../components/app-card';

const componentTitle = 'add';

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    submit() {
        const label = this.shadowRoot.querySelector('#label').value;
        const merchant = this.shadowRoot.querySelector('#merchant').value;

        this.shadowRoot.querySelector('#label').value = '';
        this.shadowRoot.querySelector('#merchant').value = '';

        alert(`Added ${label} from ${merchant}`);
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
