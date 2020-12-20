import Routes from "../Routes";
import { renderToString } from "react-dom/server";
//重要是要用到StaticRouter
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getStore } from '../store';
import React from "react";

export const render = (req) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.path}>{Routes}</StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
