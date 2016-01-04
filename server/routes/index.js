'use strict';

const koa = require('koa');
const router = require('koa-router')();
const rp = require('request-promise');
const request = require('../services/request');
const qs = require('querystring');

const main = koa();

router.get('/', function* () {
  const query = {
    computeCount: true,
    page: 1,
    pageCount: 10
  }
  const {body: products} = yield request('get', `/products?${qs.stringify(query)}`);
  this.body = yield this.render('Home', {
    props: { products },
  });
});


main.use(router.routes())
  .use(router.allowedMethods());

module.exports = main;
