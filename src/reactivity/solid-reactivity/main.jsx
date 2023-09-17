import { createSignal, createEffect } from "solid-js";

export const App = () => {
    const [count, setCount] = createSignal(0);

    const h1 = document.createElement("h1")

    createEffect(() => {
        h1.textContent = `The count is ${count()}`
    })

    const button = document.createElement("button")
    button.textContent = "Click Me"
    button.onclick = () => setCount(() => count() + 1)

    document.body.textContent = "";
    document.body.append(h1)
    document.body.append(button)
}