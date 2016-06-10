'use strict';

const koa = require('koa');
const router = require('koa-router')();
const rp = require('request-promise');
const apiRoutes = require('./api')(router);
const parse = require('co-busboy');
const fs = require('fs');
const path = require('path');
const os = require('os');

const main = koa();

router.get('/', function* () {
  this.body = yield this.render('Home', {
    props: { cheers: 'toto' },
  });
});

router.post('/uploadImages', function* () {
  console.log('UPLOAD');
  var parts = parse(this);
  console.log(parts);
  var part;

  while (part = yield parts) {
    var stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
    part.pipe(stream);
    console.log('uploading %s -> %s', part.filename, stream.path);
  }

  this.redirect('/');
});

main.use(router.routes())
  .use(router.allowedMethods());

module.exports = main;
