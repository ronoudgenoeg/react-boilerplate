'use strict';

const gulp = require('gulp');
const babel = require('babel-core/register');
const plugins = require('gulp-load-plugins')();
const istanbul = require('gulp-babel-istanbul');

const unitTests = function() {
  return gulp.src(['tests/config/setup.js', 'tests/unit/**/*.js'])
  .pipe(plugins.mocha({
    reporter: 'spec',
    compilers: {js: babel}
  }));
};

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js', 'tests/**/*.js'])
  .pipe(plugins.eslint())
  .pipe(plugins.eslint.format())
  .pipe(plugins.eslint.failAfterError());
});

gulp.task('coverage', function(done) {
  gulp.src(['src/**/*.js'])
  .pipe(istanbul())
  .pipe(istanbul.hookRequire())
  .on('finish', function(){
    unitTests()
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({thresholds: {global: 100}}))
    .on('end', done);
  });
});

gulp.task('test:unit', function(){
  return unitTests();
});

gulp.task('test', plugins.sequence('coverage'));
gulp.task('default', plugins.sequence('lint', 'coverage'));
