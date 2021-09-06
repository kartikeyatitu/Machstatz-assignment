const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/Database/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port =  8001;

server.use(middlewares);
server.use(router);

server.listen(port);