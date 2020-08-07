import { LitElement } from "lit-element";
import { navigator } from "lit-element-router";

import { template } from './template';
import { style } from './style';

import '../../components/navbar';
import '../../components/app-card';

import * as firebase from 'firebase/app';

const componentTitle = 'login';

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    googleLogin() {
        const navigate = this.navigate;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
            const provider = new firebase.auth.GoogleAuthProvider();
            return firebase.auth().signInWithPopup(provider).then(res => {
                navigate('/');
            }).catch(e => {
                console.error(e);
                alert('An error occurred');
            });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
