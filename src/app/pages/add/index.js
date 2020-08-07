import { LitElement } from "lit-element";
import { navigator } from "lit-element-router";

import { template } from './template';
import { style } from './style';

import { firebase } from '../../service/parcel.service';
import { ParcelService } from '../../service/parcel.service';

import '../../components/navbar';
import '../../components/app-card';

const componentTitle = 'add';

const parcelService = new ParcelService();

export class PageComponent extends navigator(LitElement) {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    async submit() {
        const label = this.shadowRoot.querySelector('#label').value;
        const merchant = this.shadowRoot.querySelector('#merchant').value;

        if(!label || !merchant) {
            alert('Label and Merchant are required');
        } else {
            await parcelService.add({ label, merchant, status: 'in_transit' });
            this.shadowRoot.querySelector('#label').value = '';
            this.shadowRoot.querySelector('#merchant').value = '';
    
            alert(`Added ${label} from ${merchant}`);
        }
    }

    static get styles() { return style; }    
    render() { return template.bind(this)(); }
}

customElements.define(`page-${componentTitle}`, PageComponent);
