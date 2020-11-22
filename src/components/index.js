import { Toast } from './Toast';
import { Error } from './Error';
import { NotFound } from './NotFound';
import { Root } from './Root';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Clock } from './Clock';
import { LocalePicker } from './LocalePicker';
import { Browse } from './Browse';
import { BrowseCard } from './BrowseCard';
import { Detail } from './Detail';
import { DetailCard } from './DetailCard';
import { Counter } from './Counter';
import { CounterModal } from './CounterModal';
import { Jokes } from './Jokes';
import { Joke } from './Joke';
import { Datagrid } from './Datagrid.js';
import { Charts } from './Charts';
import { Form } from './Form.js';
import { FormTextField } from './form/FormTextField';
import { FormTagsField } from './form/FormTagsField';
import { FormRoleField } from './form/FormRoleField';
import { Widgets } from './Widgets';

export function registerComponents() {
  customElements.define('app-toast', Toast);
  customElements.define('app-error', Error);
  customElements.define('app-not-found', NotFound);
  customElements.define('app-root', Root);
  customElements.define('app-navbar', Navbar);
  customElements.define('app-content', Content);
  customElements.define('app-clock', Clock);
  customElements.define('app-locale-picker', LocalePicker);
  customElements.define('app-browse', Browse);
  customElements.define('app-browse-card', BrowseCard);
  customElements.define('app-detail', Detail);
  customElements.define('app-detail-card', DetailCard);
  customElements.define('app-counter', Counter);
  customElements.define('app-counter-modal', CounterModal);
  customElements.define('app-jokes', Jokes);
  customElements.define('app-joke', Joke);
  customElements.define('app-datagrid', Datagrid);
  customElements.define('app-charts', Charts);
  customElements.define('app-form', Form);
  customElements.define('app-form-text-field', FormTextField);
  customElements.define('app-form-tags-field', FormTagsField);
  customElements.define('app-form-role-field', FormRoleField);
  customElements.define('app-widgets', Widgets);
}
