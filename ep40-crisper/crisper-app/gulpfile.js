var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');

gulp.task('copy', function() {
  return gulp.src([
      'app/index.html',
      'app/bower_components/webcomponentsjs/webcomponents-lite.js'
    ], {
      base: 'app'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  return gulp.src('app/elements/elements.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(crisper())
    .pipe(gulp.dest('dist/elements'));
});

gulp.task('default', ['copy', 'build']);
