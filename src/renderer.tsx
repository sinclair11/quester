import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { inDev } from "./utils/helpers";
// import { Provider } from "react-redux";
// import { store } from "@src/store/store";

// Application to Render
const app = <App title="Quester" version="1.0.0" />;

// Render application in DOM
ReactDOM.render(app, document.getElementById("root"));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
