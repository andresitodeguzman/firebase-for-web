import { LitElement } from "lit-element";
import { navigator } from "lit-element-router";

import { template } from './template';
import { style } from './style';

import '../../components/navbar';
import '../../components/app-card';

const componentTitle = 'home';

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.list = [{ name: 'abc', status:'done' },{ name: 'def', status:'done' }]
    }

    addItem(event) {
        event.preventDefault();
        this.navigate('/add');
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
