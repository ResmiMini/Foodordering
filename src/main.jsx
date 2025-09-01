
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/Usercontext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Foodordering">
    <UserProvider>
    <App />
        </UserProvider>

  </BrowserRouter>
);