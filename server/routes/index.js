'use strict';

const koa = require('koa');
const router = require('koa-router')();
const rp = require('request-promise');

const main = koa();

router.get('/', function* () {
  this.body = yield this.render('Home', {
    props: { cheers: 'toto' },
  });
});

router.get('/deputes', function* () {
  const deputes = yield rp('http://localhost:4001/api/v1/elus?limit=30').then(json => {
    return JSON.parse(json);
  });
  this.body = yield this.render('Deputes', {
    props: { deputes: deputes },
    scripts: ['https://maps.googleapis.com/maps/api/js'],
  });
});

router.get('/services/:id', function* () {
  this.body = yield this.render('Service', {
    props: { serviceId: this.params.id }
  });
});

main.use(router.routes())
  .use(router.allowedMethods());

module.exports = main;
