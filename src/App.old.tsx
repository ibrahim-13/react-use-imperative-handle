import React from "react";
import { Alert, AlertProps } from "./alert.component.old";

function App() {
  const [props, setProps] = React.useState<AlertProps>();
  return (
    <>
      {props && <Alert {...props} />}
      <button
        onClick={() => setProps({
          message: "Message 1",
          onSuccess: () => alert("Action 1"),
          onClose: () => setProps(undefined),
        })}
      >Show 1</button>
      <button
        onClick={() => setProps({
          message: "Message 2",
          onSuccess: () => alert("Action 2"),
          onClose: () => setProps(undefined),
        })}
      >Show 2</button>
    </>
  );
}

export default App;
