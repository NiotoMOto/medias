'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const constants = require('./constants');
const node = require('./node');
const webpackConfig = require(constants.paths.webpack.config);

gulp.task('node:kill', node.kill);

gulp.task('node:restart', ['node:kill'], node.start);

gulp.task('webpack', ['node:kill'], (done) =>
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
  }).listen(8080, 'localhost', (err) => {
    if (err) {
      plugins.util.log(err);
    }
    done();
  }));

gulp.task('iconfont', function(){
  gulp.src(constants.paths.font.svg)
    .pipe(plugins.iconfontCss({
      fontName: constants.paths.font.name,
      path: constants.paths.font.template,
      targetPath: '../../icons.scss',
      fontPath: './fonts/icon/'
    }))
    .pipe(plugins.iconfont({
      fontName: constants.paths.font.name,
      normalize: true
     }))
    .pipe(gulp.dest(constants.paths.font.dir));
});

gulp.task('copyIcons', ['iconfont'], () => {
  gulp.src(constants.paths.font.icons, {base: constants.paths.font.dir}).pipe(gulp.dest(`${constants.paths.public.css}/fonts/icon/`));
})

gulp.task('compile', ['node:kill'], () =>
  constants.tsProject.src()
    // .pipe(plugins.cached('compiling'))
    .pipe(plugins.typescript(constants.tsProject)
      .on('error', function(err) {
        plugins.util.log(err);
        this.emit('end');
      }))
    .pipe(plugins.babel()
      .on('error', function(err) {
        plugins.util.log(err);
        this.emit('end');
      }))
    .pipe(gulp.dest(constants.paths.server.root)));

gulp.task('copy', ['node:kill'], () =>
  gulp.src(constants.paths.common.json)
    .pipe(plugins.cached('copying')
      .on('error', function(err) {
        plugins.util.log(err);
        this.emit('end');
      }))
    .pipe(gulp.dest(constants.paths.server.common)));

gulp.task('scss', () =>
  gulp.src(constants.paths.scss)
    .pipe(plugins.sass()
      .on('error', function(err) {
        plugins.util.log(err);
        this.emit('end');
      }))
    .pipe(plugins.concat('main.css'))
    .pipe(gulp.dest(constants.paths.public.css)));

gulp.task('node-after-compile', ['copy', 'compile'], node.start);

gulp.task('node-after-copy', ['copy'], node.start);

gulp.task('watch', ['copyIcons', 'scss', 'webpack', 'compile', 'copy'], () => {
  gulp.watch(constants.paths.scss, ['scss']);
  gulp.watch(constants.paths.common.react, ['node-after-compile']);
  gulp.watch(constants.paths.server.noReact, ['node:restart']);
  gulp.watch(constants.paths.common.json, ['node-after-copy']);
});
