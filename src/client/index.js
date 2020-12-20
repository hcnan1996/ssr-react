import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from 'react-router-config';
import routes from "../routes.js";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>{renderRoutes(routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
