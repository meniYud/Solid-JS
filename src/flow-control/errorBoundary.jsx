import { render } from "solid-js/web";
import { ErrorBoundary } from "solid-js";

const Broken = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>
}

export function ErrorBoundaryComponent() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => <h5>Ho No: <p style="color: red">{err.message}</p></h5>}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}