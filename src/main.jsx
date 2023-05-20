import { createSignal, createEffect } from "./reactivity";

export const App = () => {
    const [count, setCount] = createSignal(0);
    const [count2, setCount2] = createSignal(2);
    const [show, setShow] = createSignal(true);

    createEffect( () => {
        if(show()) console.log(count())
        else console.log(count2())
    } )

    setShow(false)
    setCount(10)

    return <p>{count()}</p>
}