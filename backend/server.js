const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

fastify.register(cors, {
  origin: ["http://localhost:5173", "http://localhost:1234"],
  // methods: ["GET", "POST", "PUT", "DELETE"],
  // allowedHeaders: ["Authorization"],
  // credentials: true,
});

fastify.get("/message", (request, reply) => {
  reply.send({ message: "u r welcome" });
});

fastify.delete("/delete", (request, reply) => {
  reply.send({ message: "deleted" });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
