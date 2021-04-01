// server/index.js
import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from '../containers/home';

const app = express();
// React 提供了两个方法 renderToString 和 renderToStaticMarkup 用来将组件输出成 HTML 字符串
const content = renderToString(<Home />);
app.get('/', function (req, res) {
  res.send(
  `
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
  `
  );
})
app.listen(3001, () => {
  console.log('listen:3001')
})