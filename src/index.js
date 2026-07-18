import React from "react";
import {createRoot} from "react-dom/client";
import SharingData from "./official-docs/quick-start/sharing-data";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<SharingData/>);