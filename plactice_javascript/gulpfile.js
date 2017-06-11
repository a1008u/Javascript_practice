const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require("browserify");
const babelify   = require("babelify");
const transform = require('vinyl-transform');
const source = require("vinyl-source-stream");
 
gulp.task('makejs', () => {
    return gulp.src('js/*.js')
                .pipe(babel({presets: ['es2015']}))
                .pipe(gulp.dest('js_es'));
});

gulp.task('browserify', () => {
  return browserify('js/object_es2015_2.js', { debug: true })
    // .transform(babelify)
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source("app.js")) 
    .pipe(gulp.dest('js_es'));
});


var startWatchify = () => {
    // コンパイル対象ファイルのディレクトリ名
    const srcDir = './js';

    // コンパイル先ディレクトリ
    const distDir = './js_es';
    
    // コンパイル対象のファイル名
    const sources = ['object/object_es2015_1.js'
                    ,'object/object_es2015_4.js'
                    , 'object_es2015_2.js'
                    , 'object_es2015_3.js'];
    sources.forEach((entryPoint) => {

        // browserifyに渡すオプション群
        return browserify(srcDir + '/' + entryPoint, { debug: true })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source("app.js")) 
        .pipe(gulp.dest('js_es'));
    });
    
};   

gulp.task('default', startWatchify);
