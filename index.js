import React from "react";
import App from "./src/app/App";
import './index.scss';

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
