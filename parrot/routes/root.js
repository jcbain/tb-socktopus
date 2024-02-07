"use strict";

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/websocket"));
  fastify.register(async function (fastify) {
    fastify.get(
      "/*",
      { websocket: true },
      (connection /* SocketStream */, req /* FastifyRequest */) => {
        fastify.log.info("Client connected");
        connection.socket.send("🦜 Welcome to the parrot server");

        connection.socket.on("message", (message) => {
          const parrotMessage = `🦜 SQUAKS: ${message.toString()}`;
          connection.socket.send(parrotMessage);
        });
      }
    );
  });
};
