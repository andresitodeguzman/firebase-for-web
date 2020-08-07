import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

// import components
import './components/app-link';
import './components/router-outlet';

// import pages
import './pages/home';
import './pages/login';
import './pages/logout';
import './pages/not-found';
import './pages/add';

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
        },{
        name: 'add',
        pattern: 'add'
        },{
        name: 'login',
        pattern: 'login'
        }, {
        name: 'logout',
        pattern: 'logout'
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
    }

    render() {
        return html`
        <router-outlet active-route=${this.route}>
            <page-home route='home'></page-home>
            <page-add route='add'></page-home>
            <page-login route='login'></page-login>
            <page-logout route='logout'></page-logout>
            <page-notfound route='not-found'></page-notfound>
        </router-outlet>
    `;
    }

}

customElements.define('firebase-app', App);