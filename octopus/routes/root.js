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
          return "http://crab:4001";
        }

        return "http://parrot:3000";
      },
    },
  });

  fastify.register(require("@fastify/http-proxy"), {
    upstream: "http://buffalo:6001",
    http2: false, // optional
    prefix: "/buffalo", // needs a prefix as first registration of / is to the websocket
  });
};
