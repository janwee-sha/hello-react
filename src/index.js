import React from "react";
import {createRoot} from "react-dom/client";
import App from "./official-docs/quick-start/component-vs-function";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);