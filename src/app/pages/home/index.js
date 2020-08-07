import { LitElement } from "lit-element";
import { navigator } from "lit-element-router";

import { template } from './template';
import { style } from './style';

import { ParcelService } from '../../service/parcel.service';

import '../../components/navbar';
import '../../components/app-card';

const componentTitle = 'home';
const parcelService = new ParcelService();


export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
            list: {
                type: Array
            },
            arrived: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.list = [];
        this.arrived = [];
    }

    connectedCallback(){
        super.connectedCallback();
    }

    async getInTransit(){
        await parcelService.getAllInTransit().then(res => {
            this.list = [];

            if(!res.empty) {
                res.forEach(o => {
                    const l = o.data();
                    l.id = o.id;
                    this.list.push(l);
                })
            }
        }).then(()=> { this.requestUpdate() });
    }

    async getArrived(){
        await parcelService.getAllArrived().then(res => {
            this.arrived = [];

            if(!res.empty) {
                res.forEach(o => {
                    const l = o.data();
                    l.id = o.id;
                    this.arrived.push(l);
                })
            }
        }).then(()=> { this.requestUpdate() });
    }

    addItem(event) {
        event.preventDefault();
        this.navigate('/add');
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
