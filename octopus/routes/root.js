"use strict";

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/http-proxy"), {
    websocket: true,
    upstream: "",
    http2: false, // optional
    replyOptions: {
      getUpstream: () => {
        const val = Math.floor(Math.random() * 10);
        if (val >= 5) {
          return "http://localhost:4001";
        }

        return "http://localhost:3000";
      },
    },
  });
};
