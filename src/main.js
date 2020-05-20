import "./css/base.scss";
import React from "react";
import ReactDom from 'react-dom';
import App from "./components/App.jsx";
import Store from "./Store/Store.js";

console.log(Store.getState());
ReactDom.render(<App store = {Store.getState()}/>,document.getElementById("root"));

