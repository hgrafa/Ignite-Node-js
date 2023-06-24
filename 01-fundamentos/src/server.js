import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      name: "John",
      age: 22,
      height: 1.8,
    });

    return res.writeHead(201).end("cadastrado");
  }

  return res.writeHead(404).end("rota desconhecida");
});

server.listen(3333);
