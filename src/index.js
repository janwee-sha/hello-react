import React from "react";
import {createRoot} from "react-dom/client";
import Products from "./official-docs/quick-start/products";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Products/>);