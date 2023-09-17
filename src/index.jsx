/* @refresh reload */
import { render } from 'solid-js/web';

import {App as AppVanila} from './vanila-reactivity/main';
import {App as AppSolid} from './solid-reactivity/main';
import {App as AppSolidJSX} from './jsx-reactivity/main';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <AppSolidJSX />, root);
