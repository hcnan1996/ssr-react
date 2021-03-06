import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";
import routes from "../routes.js";

const App = () => {
  const insertCss = (...styles) => {
    const removeCss = styles.map((style) => style._insertCss());
    return () => removeCss.forEach((dispose) => dispose());
  };
  const context = { insertCss };
  return (
    <StyleContext.Provider value={context}>
      <Provider store={getClientStore()}>
        <BrowserRouter>
          <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
