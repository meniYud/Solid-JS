import { mergeProps } from "solid-js";

export default function GreetingMerge(props) {
    const mergedProps = mergeProps({ greeting: "Hi", name: "John"}, props)
  return <h3>{mergedProps.greeting} {mergedProps.name}</h3>
}