import { start, log, createSignal, createEffect } from "./reactive";

function playground() {
  log("1. Create Signal");
  const [count, setCount] = createSignal(0);

  log("2. Create Reaction");
  createEffect(() => log("The count is", count()));

  log("3. Set count to 5");
  setCount(5);

  log("4. Set count to 10");
  setCount(10);
}

// setup
start(playground);
