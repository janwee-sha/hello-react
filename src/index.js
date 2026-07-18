import React from "react";
import {createRoot} from "react-dom/client";
import ConditionalStatement from "./official-docs/quick-start/conditional-statement";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<ConditionalStatement/>);