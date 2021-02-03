import React from "react";
import { render } from "react-dom";
import "./css/style.css";
import App from "./components/App";
import Router from "../src/components/Router";

render(<Router />, document.getElementById("main"));
