const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("nihao laidao zhuye");
  }
  if (req.url === "/about") {
    res.end("about page ");
  }
  // if (res === "error") {
  //   res.end(`<h1>wacao meile</h1>
  // <p>looking for</p>
  // <a href="/">back home</a>`);
  //}
  console.log(res);
});

server.listen(5000);
