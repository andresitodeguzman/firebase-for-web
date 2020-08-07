import { LitElement } from "lit-element";
import { navigator } from 'lit-element-router';

import { template } from './template';
import { style } from './style';

const componentTitle = 'navbar';

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    logout() {
        this.navigate('/login');
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`app-${componentTitle}`, PageComponent);
