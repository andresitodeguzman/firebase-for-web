import { html } from 'lit-element';

export function template() {
    return html`
    <div>
        <div class="inner">
            <slot></slot>
        </div>
    </div>
    `;
}