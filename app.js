const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    res.end("about page");
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
  } else {
    res.end("erro");
  }
});
server.listen(5000, () => {
  console.log("he is listening 5000,...");
});
