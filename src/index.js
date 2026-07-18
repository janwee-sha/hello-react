import React from "react";
import {createRoot} from "react-dom/client";
import UsingState from "./official-docs/quick-start/using-state";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<UsingState/>);