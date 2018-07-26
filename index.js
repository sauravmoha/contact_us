"use strict";
const Joi = require("joi");

const contact_us = {
  name: "contact_us",
  register: async function(server, options) {
    try {
      server.route(require("./routes")(options));
    } catch (e) {
      server.log("Unexpected Error in Logging contact_us Request");
      server.log(e);
    }
  }
};

module.exports = contact_us;
