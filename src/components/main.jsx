import { createSignal } from "solid-js";
import GreetingMerge from "./mergeProps";
import GreetingSplit from "./splitProps";
import ColoredList from "./children";


export function App() {
  const [color, setColor] = createSignal("purple");
  
  return <>
    <ColoredList color={color()}>
      <For each={["Most", "Interesting", "Thing"]}>{item => <div>{item}</div>}</For>
    </ColoredList>
    <button onClick={() => setColor("teal")}>Set Color</button>
  </>;
}