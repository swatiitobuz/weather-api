const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("A request is made " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/txt" });
    fs.createReadStream(__dirname + "/weatherDatabaseS.txt").pipe(res);
  }
});
server.listen(3002, "127.0.0.1");
console.log("listening to 127.0.0.1:3002");
