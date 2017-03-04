const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ camelize: true });
const browserSync = require('browser-sync').create();
const source = require('vinyl-source-stream');

const rollup = require('rollup-stream');


// typescript
const ts = require("gulp-typescript");
const tsProject = ts.createProject("./tsconfig.json");


gulp.task("typescript", () => {
    var tsResult = gulp.src("src/js/**/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("built/js"));
});

gulp.task('rollup', ['typescript'], function() {
  return rollup({
      entry: './built/js/main.js'
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});


gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch Files For Changes
gulp.task('watch', () => {
  gulp.watch('src/js/**/*.ts', ['rollup']);
});




// Default Task
gulp.task('default', ['rollup', 'browser-sync', 'watch']);
