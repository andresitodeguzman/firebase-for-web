import { html } from 'lit-element';

export function template() {
	return html`
	<nav>
		<div>
			<div>
				<div>
					<a href="/">
						<b>Parcel DB</b>
					</a>
				</div>
				<div>
					<a href="javascript:void(0)" @click="${this.logout}">Logout</a>
				</div>
			</div>
		</div>
	</nav>
	`;
}