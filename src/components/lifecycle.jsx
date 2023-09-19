import { createSignal, onMount, onCleanup, For } from "solid-js";
import "./lifecycleStyle.css";

export default function Lifecycle() {
  const [photos, setPhotos] = createSignal([]);

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    setPhotos(await res.json());
  });

  return <>
    <h1>Photo album</h1>

    <div class="photos">
      <For each={photos()} fallback={<p>Loading...</p>}>{ photo =>
        <figure>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <figcaption>{photo.title}</figcaption>
        </figure>
      }</For>
    </div>
  </>;
}


export function Counter() {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);
onCleanup(() => clearInterval(timer));

  return <div>Count: {count()}</div>;
}