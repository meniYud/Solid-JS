import { createSignal, Show } from 'solid-js';

export function ShowComponent() {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn())
  
  return (
    <Show
      when={loggedIn()}
      fallback={<button onClick={toggle}>Log in</button>}
    >
      <button onClick={toggle}>Log out</button>
    </Show>
  );
}