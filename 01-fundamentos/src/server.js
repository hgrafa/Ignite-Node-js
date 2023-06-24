import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("usuarios");
  }

  if (method === "POST" && url === "/users") {
    return res.end("usuarios");
  }

  return res.end("Hello world!");
});

server.listen(3333);
