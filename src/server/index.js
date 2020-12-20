import express from "express";
import routes from "../Routes";
import { getStore } from "../store";
import { matchRoutes } from "react-router-config";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));
//注意这里要换成*来匹配
app.get("*", function (req, res) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    let context = { css: [] };
    const html = render(store, routes, req, context);
    if (context.action === "REPLACE") {
      res.redirect(301, context.url);
    } else if (context.NotFound) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3001, () => {
  console.log("listen:3001");
});
