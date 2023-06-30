import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
// import Header from "./Header";
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";
// import Footer from "./Footer";
import { Header, Page1, Page2, Page3, Page4, Footer } from "./js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
