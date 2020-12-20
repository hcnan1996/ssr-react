import { renderToString } from "react-dom/server";
//重要是要用到StaticRouter
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import React from "react";
import { Helmet } from "react-helmet";

export const render = (store, routes, req, context) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );
  //拿到helmet对象，然后在html字符串中引入
  const helmet = Helmet.renderStatic();
  return `
    <html>
      <head>
        <title>ssr</title>
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
