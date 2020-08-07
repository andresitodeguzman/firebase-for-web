import { html } from 'lit-element';

export function template() {
    return html`
    <nav>
        <div>
            <div>
                <a href="/">
                    <b>Parcel DB</b>
                </a>
            </div>
            <div>
                <a href="javascript:void(0)">Logout</a>
            </div>
        </div>
    </nav>
    `;
}