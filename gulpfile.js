var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');
    less = require('gulp-less');

var paths = {
  views: ['./app/index.html', './app/views/**/*.html'],
  scripts: ['./app/scripts/**/*.js'],
  styles: ['./app/styles/**/*.less'],
  mainLess: './app/styles/main.less'
};

gulp.task('connect', connect.server({
  root: ['app'],
  port: 1337,
  livereload: true
}));

gulp.task('html', function() {
  gulp.src(paths.views)
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src(paths.mainLess)
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.views, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['connect', 'scripts', 'styles', 'watch']);
