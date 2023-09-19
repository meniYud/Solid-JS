/* @refresh reload */
import { render } from 'solid-js/web';

import {App as AppVanila} from './reactivity/vanila-reactivity/main';
import {App as AppSolid} from './reactivity/solid-reactivity/main';
import {App as AppSolidJSX} from './reactivity/jsx-reactivity/main';
import {App as FGReactivity} from './reactivity/fine-grained-reactivity/main';
import {App as ReactiveList} from './reactivity/lists-reactivity/main';
import {App as ControledFlow} from './flow-control/main';
import {App as ComponentProps} from './components/main';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <ComponentProps />, root);
