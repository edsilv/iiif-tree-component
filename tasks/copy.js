var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var utils = require('gulp-utils');

gulp.task('copy:build', function() {
    return gulp.src([
        config.dist + '/' + config.jsOut,
        config.dist + '/' + config.name + '.min.js'
    ]).pipe(gulp.dest('./test/js'));
});

gulp.task('copy:libs', function() {
    return gulp.src([
        'node_modules/base-component/dist/base-component.js',
        'node_modules/manifesto.js/dist/client/manifesto.js',
        'node_modules/eventemitter2/lib/eventemitter2.js'
    ]).pipe(gulp.dest('./test/js'));
});

gulp.task('copy:typings', function() {
    return gulp.src([
        'node_modules/base-component/dist/base-component.d.ts',
    ]).pipe(gulp.dest('./typings'));
});