import { html } from 'lit-element';
import { MobxLitElement } from '../utils';
import { browseStore } from '../stores';
import './app-browse-card';
import './app-error';

export class AppBrowse extends MobxLitElement {
  firstUpdated() {
    browseStore.load();
  }

  render() {
    return browseStore.hasError
      ? html`<app-error text="${browseStore.error.message}"></app-error>`
      : html`
          <div class="row p-2">
            ${browseStore.items.map(
              (item) => html`
                <app-browse-card
                  class="col-6 col-md-4 col-lg-3 p-2"
                  .data="${item}"
                ></app-browse-card>
              `,
            )}
          </div>
        `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('app-browse', AppBrowse);
