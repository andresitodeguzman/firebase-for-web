import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './components/app-link';
import './components/router-outlet';

import './pages/home';

class App extends router(LitElement) {
    static get properties() {
        return {
        route: { type: String },
        params: { type: Object },
        query: { type: Object }
        };
    }
    
    static get routes() {
        return [{
        name: 'home',
        pattern: '',
        data: { title: 'Home' }
        }, {
        name: 'info',
        pattern: 'info'
        }, {
        name: 'user',
        pattern: 'user/:id'
        }, {
        name: 'not-found',
        pattern: '*'
        }];
    }
    
    constructor() {
        super();
        this.route = '';
        this.params = {};
        this.query = {};
    }
    
    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        console.log(route, params, query, data);
    }

    render() {
        return html`
        <app-link href="/">Home</app-link>
        <app-link href="/info">Info</app-link>
        <app-link href="/info?data=12345">Info?data=12345</app-link>
        <app-link href="/user/14">user/14</app-link>
    
        <router-outlet active-route=${this.route}>
            <page-home route='home'>Home</page-home>
            <h1 route='info'>Info ${this.query.data}</h1>
            <h1 route='user'>User ${this.params.id} </h1>
            <h1 route='not-found'>Not Found </h1>
        </router-outlet>
    `;
    }

}

customElements.define('firebase-app', App);