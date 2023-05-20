import { createSignal, createEffect, createMemo, untrack } from "./reactivity";

export const App = () => {
    const [count, setCount] = createSignal(0);
    const [count2, setCount2] = createSignal(2);

    const sum = createMemo(() => count() + count2())

    createEffect( () => {
        // console.log(count(), count2(), sum())
        console.log(untrack(() => count()))
    } )

    setCount(10)

    return <p>{sum()}</p>
}