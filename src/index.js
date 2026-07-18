import React from "react";
import {createRoot} from "react-dom/client";
import HandlingEvent from "./official-docs/quick-start/handling-event";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<HandlingEvent/>);