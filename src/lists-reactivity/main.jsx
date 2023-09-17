import { createSignal, For } from "solid-js";


function List(props) {
    

    return <For each={props.list}>
        {(listItem) => {
            console.log(`Item: ${listItem} rerendered`)
            return <li>{listItem}</li>
        }}
    </For>
}

export const App = () => {
    const [myList, setNewList] = createSignal(['a', 'b', 'c']);
   console.log("App rendered")
    
    return (<>
        <ul><List list={myList()}/></ul>
        <button onClick={() => setNewList(['a', 'F', 'c'])}>replace list</button>
    </>)
}