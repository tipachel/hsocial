import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./state_manager/state.js";
 const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
 
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  ); 
};
