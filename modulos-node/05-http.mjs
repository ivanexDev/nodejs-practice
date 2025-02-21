import http from "node:http";
import { PORT } from "./const.mjs";

const server = http.createServer();

server.on("connection", (socket) => {
  console.log(
    `🔹 Usuario conectado desde: ${socket.remoteAddress} x ${socket.remotePort}`,
  );
});

server.on("request", (req, res) => {
  console.log(req.method);

  const msg = { msg: "hola" };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(msg));
});

server.on("error", (err) => {
  console.log(error);
});

server.listen(PORT, "localhost", () => {
  console.log("server listening... on port " + PORT);
});
