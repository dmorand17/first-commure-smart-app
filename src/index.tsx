// Needed to render some Commure components
import "regenerator-runtime";

// import Commure styles
import "@commure/components-core/lib/style.css";

// babel-polyfill is a heavy dependency, but we encourage it because many health systems are locked into using Internet Explorer
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
//import App from "./PatientList";
import App from "./PatientCard";

ReactDOM.render(<App />, document.getElementById("root"));
