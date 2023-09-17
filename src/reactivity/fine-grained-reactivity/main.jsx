import { createSignal } from "solid-js";


function Counter(props) {
    

    return <>
        <h1>The count is {props.children}</h1>,
        <button onClick={props.onClick}>Click Me</button>
    </>
}

export const App = () => {
    const [count, setCount] = createSignal(0);

    console.log("Rendered only once! no function re-render")
    
    return(<>
        <Counter onClick={() => setCount(() => count() + 1)}>{count()}</Counter>
        <Counter onClick={() => setCount(() => count() + 2)}>{count() * 2}</Counter>
    </>)
}