const gulp = require('gulp');
const { isProduction } = require('../../config/env');
const config = require('../../config/gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulpif = require('gulp-if');
const dev = require('../../config/webpack.dev');
const prod = require('../../config/webpack.prod');

gulp.task('script', () =>
  webpackStream(gulpif(isProduction, prod, dev), webpack)
    .pipe(gulp.dest(config.script.dest))
);
