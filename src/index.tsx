import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// @ts-ignore
import App from "./App.tsx";
// @ts-ignore
import { StoreProvider } from "./Store.tsx";
import reportWebVitals from "./reportWebVitals";

import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./HomePage.tsx";
import FavPage from "./FavPage.tsx";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="faves" />
      </App>
    </Router>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
