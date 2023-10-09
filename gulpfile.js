const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps=require('gulp-sourcemaps')
const concat=require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport-8-plugin');

/*gulp.task('desktope', function () {
  gulp.series('less',)
  return gulp.src(['./src/app/less/desktope/*.less'])
      .pipe(less())
      .pipe(concat("style.desktope.min.less"))
      .pipe(gulp.dest('./src/app/less/'));
});
*/
gulp.task('less', function () {
  return gulp.src(`./src/app/less/*.less`)
    .pipe(concat("style.less"))
    .pipe(less())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
  }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/app/css'));
});
gulp.task('watch', function () {
  //gulp.watch('./src/app/less/variables.less', gulp.series('desktope',));
  //gulp.watch('./src/app/less/desktope/*.less', gulp.series('desktope',));
  gulp.watch('./src/app/less/*.less', gulp.series('less',));
});

gulp.task('default', gulp.series('less', 'watch'));

