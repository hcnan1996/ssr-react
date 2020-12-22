import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { Helmet } from "react-helmet";

export const render = (store, routes, req, ctx) => {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const context = { insertCss }
  const content = renderToString(
    <StyleContext.Provider value={context}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={ctx}>
          <div>{renderRoutes(routes)}</div>
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  );
  const helmet = Helmet.renderStatic();
  console.log(css)
  return `
    <html>
      <head>
      <style>${[...css].join("")}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
