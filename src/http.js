const http = require("http");
const url = require("url");
const qs = require("querystring");
const getUserData = userId => ({
  userId,
  name: "node demo",
  date: new Date().getDate()
});
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    const reqUrl = url.parse(req.url);
    if (reqUrl.pathname === "/index") {
      const uid = qs.parse(reqUrl.query).userId;
      const result = JSON.stringify(getUserData(uid));
      res.end(result);
    } else {
      res.writeHead(404);
      res.end("NotFound");
    }
  })
  .listen(8080, () => {
    console.log("Listened in port 8080");
  });
