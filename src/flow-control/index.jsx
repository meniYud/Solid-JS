import { createSignal, Index } from 'solid-js';

export function IndexComponent() {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);
  
  return (
    <ul>
        <Index each={cats()}>
            {(cat, ind) => <li>
                <a target="_blank" href="">
                {ind}: {cat().name}
                </a>
            </li>}
        </Index>
    </ul>
  );
}