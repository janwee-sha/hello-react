import React from "react";
import { createRoot } from "react-dom/client";
import MyApp from "./official-docs/quick-start/components.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<MyApp />);
