const gulp = require('gulp');
const { isProduction } = require('../../config/env');
const config = require('../../config/gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const plugins = [
  require('autoprefixer')()
];

const options = {
  syntax: require('postcss-scss')
};

if (isProduction) {
  plugins.push(require('cssnano')());
}

gulp.task('style', () =>
  gulp.src(config.style.src)
    .pipe(gulpif( ! isProduction, sourcemaps.init()))
    .pipe(sass({ includePaths: ['./node_modules'] }))
    .pipe(postcss(plugins, options))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulpif( ! isProduction, sourcemaps.write('./')))
    .pipe(gulp.dest(config.style.dest))
);
