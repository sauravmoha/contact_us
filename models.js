"use strict";
const util = require("util"); //for debugging
const esClient = require("../helpers/es");
const esQueryMaker = require("../helpers/esQueryMaker");
const _ = require("lodash");
const queryDSL = require("bodybuilder");

module.exports = options => {
  return {
    logMessageRequest: function(query, requestHost) {
      console.log("query + " + util.inspect(query, false, null));
      const esBody = {};
      _.forEach(query, (val, key) => {
        esBody[key] = val;
      });
      return esClient
        .index({
          index: process.env.SM_CONTACT_US_ELASTIC_INDEX + "_" + requestHost,
          type: "document",
          body: esBody
        })
        .then((resp, err) => {
          if (err) return false;
          console.log("returning from model");
          return true;
        });
    }
  };
};
