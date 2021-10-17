import React from "react";
import { Alert, AlertInstance } from "./alert.component";

function App() {
  const alertModal = React.useRef<AlertInstance | null>(null);
  return (
    <div>
      <h1>
        DemoApp: <b>useImperativeHandle()</b> Hook
      </h1>
      <button
        onClick={() => {
          // Open alert
          alertModal.current?.open({
            msg: "Alert from parent",
            onSuccess: () => alert("Success"),
          });
          // Close alert modal after 3 seconds
          setTimeout(() => alertModal.current?.close(), 2000);
        }}
      >
        Open Alert
      </button>
      <Alert ref={alertModal} />
    </div>
  );
}

export default App;
