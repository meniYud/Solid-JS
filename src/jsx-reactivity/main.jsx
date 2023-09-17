import { createSignal } from "solid-js";


function Counter() {
    const [count, setCount] = createSignal(0);

    return <>
        <h1>The count is {count()}</h1>,
        <button onClick={() => setCount(() => count() + 1)}>Click Me</button>
    </>
}

export const App = () => {
    
    document.body.textContent = "";
    const jsx = Counter()
    document.body.append(...jsx)
}