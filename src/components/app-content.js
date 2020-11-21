import { html } from 'lit-html';
import { stores } from '../stores';
import { addRenderReaction, clearReactions } from '../utils';
import './app-not-found';

class AppContent extends HTMLElement {
  connectedCallback() {
    addRenderReaction(this);
  }

  disconnectedCallback() {
    clearReactions(this);
  }

  render() {
    return html`
      <main class="container p-3">
        ${stores.routeStore.routeTemplate ??
        html`<app-not-found></app-not-found>`}
      </main>
    `;
  }
}

customElements.define('app-content', AppContent);
