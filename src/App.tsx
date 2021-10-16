import React from "react";
import { Alert, AlertInstance } from "./alert.component";

function App() {
  const alert = React.useRef<AlertInstance | null>(null);
  return (
    <div>
      <h1>
        DemoApp: <b>useImperativeHandle()</b> Hook
      </h1>
      <button onClick={() => alert.current?.open({ msg: "Alert from parent" })}>
        Open Alert
      </button>
      <Alert ref={alert} />
    </div>
  );
}

export default App;
