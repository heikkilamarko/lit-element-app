import { html } from 'lit-html';
import { stores } from '../stores';
import { addRenderReaction, clearReactions } from '../utils';
import './app-browse';
import './app-detail';
import './app-counter';
import './app-widgets';
import './app-error';
import './app-content.css';

class AppContent extends HTMLElement {
  connectedCallback() {
    addRenderReaction(
      this,
      () => html`<main class="container">${this.content}</main>`,
    );
  }

  disconnectedCallback() {
    clearReactions(this);
  }

  get content() {
    switch (stores.routeStore.route.name) {
      case 'browse':
        return html`<app-browse></app-browse>`;
      case 'detail':
        return html`<app-detail></app-detail>`;
      case 'counter':
        return html`<app-counter></app-counter>`;
      case 'widgets':
        return html`<app-widgets></app-widgets>`;
      default:
        return html`
          <app-error
            .title=${'404'}
            .text=${stores.i18nStore.t('notfound')}
          ></app-error>
        `;
    }
  }
}

customElements.define('app-content', AppContent);
