import { createSignal, Switch } from 'solid-js';

export function SwitchComponent() {
  const [number, setNumber] = createSignal(0);
  const increment = () => setNumber(number() + 1)
  
  return (<>
    <Switch
      fallback={<p>{number()} is between 5 and 10</p>}
    >
      <Match when={number() > 10}>
        <p>{number()} is bigger than 10</p>
      </Match>
      <Match when={number() < 5}>
        <p>{number()} is smaller than 5</p>
      </Match>
    </Switch>
    <button onClick={increment}>Increment</button>
  </>
  );
}