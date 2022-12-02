import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MachinesProvider from "./providers/MachinesProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MachinesProvider>
      <App />
    </MachinesProvider>
  </React.StrictMode>
);
