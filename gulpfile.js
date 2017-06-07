var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var del = require("del");
var header = require('gulp-header');
var runSequence = require('run-sequence');
var vinylPaths = require('vinyl-paths');

/* scssからcssを作成 */
gulp.task('makecss', function(callback) {
    return runSequence(
        "refresh"
        , "fstc"
        , "charset"
        , "clean_tmp"
        , callback
    );
});

/* 【構成要素】-------------------------------------------- */
/* tmpディレクトリを削除 */
gulp.task("refresh", function(){
    del('src/css');
});

/* 実行：「gulp fstc」 */
gulp.task("fstc", function(){
    return gulp.src("src/sass/style.scss")
                .pipe(sass())
                .pipe(autoprefixer({
                    browsers: ["ios_saf >= 8", "Android >= 4"]
                }))
                .pipe(gulp.dest("src/css_tmp"));
});

/* cssに@charsetを記載する */
gulp.task('charset', function () {
    return gulp.src('src/css_tmp/style.css')
                .pipe(header('@charset "utf-8";\n\n'))
                .pipe(gulp.dest('src/css'));
});

/* tmpディレクトリを削除 */
gulp.task("clean_tmp", function(){

    // del("src/test.html");

    gulp.src("src/css_tmp")
    .pipe(vinylPaths(del));
});
/* 【構成要素】-------------------------------------------- */




/* ブラウザを同期して利用する */
/* 実行：「gulp brwsync」 */
gulp.task("brwsync", function(){

    browserSync.init({
        server: {
            baseDir:"./src"
        }
    });

    gulp.watch("src/**", function(){
        browserSync.reload();
    });
});
