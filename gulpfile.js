var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber')
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');


// Scripts task
// Uglifies
gulp.task('scripts',function(){
  gulp.src('js/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
})

// Styles task
//
gulp.task('styles',function(){
  gulp.src('scss/**/*.scss')
  .pipe(plumber())
  .pipe(sass({
    style: 'compressed'
  }))
  .pipe(gulp.dest('css/'))
  .pipe(concat('style.css'))
        .pipe(gulp.dest('css/'))
  .pipe(livereload());
})

// Watch task
// Watches js
gulp.task('watch',function(){
  var server = livereload();
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
})

// Reload task
// Watches js and scss
gulp.task('watch',function(){
  var server = livereload();
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
})

gulp.task(
  'default' ,
  ['scripts', 'styles', 'watch']
);
