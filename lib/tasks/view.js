const gulp = require('gulp');
const config = require('../../config/gulp');
const { isProduction } = require('../../config/env');
const plumber = require('gulp-plumber');
const errorHandler = require('../utils/error-handler');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');
const data = require('gulp-data');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const prettify = require('gulp-jsbeautifier');
const minify = require('gulp-htmlmin');

gulp.task('view', () =>
  gulp.src(config.view.pages)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(gulpif( ! isProduction, cache('viewing')))
    .pipe(data(config.view.data))
    .pipe(pug(config.view.options))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulpif( ! isProduction, prettify(
      require('js-beautify-config-rowupper')
    )))
    .pipe(gulpif(isProduction, minify()))
    .pipe(gulp.dest(config.view.dest))
);
