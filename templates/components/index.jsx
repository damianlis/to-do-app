import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';

let sass = require ('../sass/style.scss');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <App />,
    document.getElementById("app")
  );
});