import { html } from 'lit-html';
import { action, computed, makeObservable, observable } from 'mobx';
import { stores } from '../stores';
import {
  addRenderReaction,
  addInterval,
  clearReactions,
  clearIntervals,
} from '../utils';

class AppClock extends HTMLElement {
  time;

  constructor() {
    super();
    makeObservable(this, {
      time: observable.ref,
      formattedTime: computed,
      timeFormat: computed,
      updateTime: action.bound,
    });
    this.updateTime();
  }

  connectedCallback() {
    addRenderReaction(this);
    addInterval(this, () => this.updateTime(), 1000);
  }

  disconnectedCallback() {
    clearIntervals(this);
    clearReactions(this);
  }

  render() {
    return html`<div class="font-monospace">${this.formattedTime}</div>`;
  }

  get formattedTime() {
    return this.timeFormat.format(this.time);
  }

  get timeFormat() {
    return new Intl.DateTimeFormat(stores.i18nStore.locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  updateTime() {
    this.time = new Date();
  }
}

customElements.define('app-clock', AppClock);
