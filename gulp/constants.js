'use strict';

const plugins = require('gulp-load-plugins')();

exports.paths = {
  common: {
    root: './common',
    react: './common/**/*.{js,jsx}',
    entry: './common/index.js',
    json: './common/**/*.json',
  },
  server: {
    root: './server',
    noReact: ['./server/**/*.js', '!./server/common/**/*.js'],
    common: './server/common',
  },
  mainCss: './public/css/main.css',
  public: {
    js: './public/js',
    css: './public/css',
  },
  scss: './scss/**/*.scss',
  font: {
    dir: './scss/fonts/icon',
    icons: './scss/fonts/icon/*.{eot,ttf,woff}',
    template: './scss/_templateFont.scss',
    svg: './scss/icons/*.svg',
    name: 'icons',
    config: {
      mode: {
        css: {     // Activate the «css» mode
          render: {
            css: true  // Activate CSS output (with default options)
          }
        }
      }
    }
  },
  webpack: {
    config: '../webpack.config.js',
  },
};

exports.node = {
  path: 'index.js',
  options: [],
};
