var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var del = require("del");
var header = require('gulp-header');
var runSequence = require('run-sequence');
var vinylPaths = require('vinyl-paths');
var packageImporter = require('node-sass-package-importer');
const babel = require('gulp-babel');

/* scssからcssを作成 */
gulp.task('make', function(callback) {
    return runSequence(
        "refresh"
        , "fstc"
        , "charset"
        , "clean_tmp"
        , "makejs"
        , "movehtml"
        , "movejpg"
        , callback
    );
});

/* 【構成要素】-------------------------------------------- */
/* tmpディレクトリを削除 */
gulp.task("refresh", function(){
    del('complete');
});

/* 実行：「gulp fstc」 */
gulp.task("fstc", function(){
    return gulp.src("sass/style.scss")
                .pipe(sass({
                    importer: packageImporter({
                        extensions: ['.scss', '.css']
                    })
                 }))
                .pipe(autoprefixer({
                    browsers: ["ios_saf >= 8", "Android >= 4"]
                }))
                .pipe(gulp.dest("complete/static/temp"));
});

/* cssに@charsetを記載する */
gulp.task('charset', function () {
    return gulp.src('complete/static/temp/style.css')
                .pipe(header('@charset "utf-8";\n\n'))
                .pipe(gulp.dest('complete/static/css'));
});

/* tmpディレクトリを削除 */
gulp.task("clean_tmp", function(){
    gulp.src("complete/static/temp").pipe(vinylPaths(del));
});

// es2015対応
gulp.task('makejs', () => {
    return gulp.src('js/*.js')
                .pipe(babel({presets: ['es2015']}))
                .pipe(gulp.dest('complete/static/js'));
});

// html
gulp.task('movehtml', () => {
    return gulp.src('html/*.html')
                .pipe(gulp.dest('complete/templates/MyData'));
});

// html
gulp.task('movejpg', () => {
    return gulp.src('jpg/*.jpg')
                .pipe(gulp.dest('complete/static/jpg'));
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
