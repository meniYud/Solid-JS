export {
    createRoot as start,
    createSignal,
    createMemo,
    createComputed as createEffect,
    onCleanup,
    untrack,
    batch
  } from "solid-js";
  
  export function log(...args) {
    const p = document.createElement("p");
    p.textContent = args.join(" ");
    document.body.append(p);
  }
  