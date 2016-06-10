const mongoose = require('mongoose')
const restify = require('koa-restify-mongoose')

function generateApi(router) {
  for (var model in mongoose.models) {
    restify.serve(router, mongoose.models[model]);
  }
}


module.exports = generateApi;
