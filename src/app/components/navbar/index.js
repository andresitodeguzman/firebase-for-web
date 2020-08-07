import { LitElement } from "lit-element";
import { navigator } from 'lit-element-router';

import { template } from './template';
import { style } from './style';

const componentTitle = 'navbar';

import * as firebase from 'firebase/app';

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    async logout() {
        await firebase.auth().signOut();
        this.navigate('/login');
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`app-${componentTitle}`, PageComponent);
