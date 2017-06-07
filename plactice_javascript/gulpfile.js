const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('makejs', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js_es'));
});