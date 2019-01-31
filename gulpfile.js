var gulp = require('gulp');

var sass = require('gulp-sass');



gulp.task('sass', function() {

    gulp.src('./src/*.scss')

        .pipe(sass())

        .pipe(gulp.dest(function(f) {

            return f.base;

        }))

    gulp.src('./src/components/*.scss')

        .pipe(sass())

        .pipe(gulp.dest(function(f) {

            return f.base;

        }))

});

// Watch
gulp.task('watch',  function() {

    // Watch .scss files
    gulp.watch('./src/*.scss', ['sass']);
    gulp.watch('./src/components/*.scss', ['sass']);

});

gulp.task('default', ['sass', 'watch']);
