import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Root } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root>
    <App />
  </Root>
);
        