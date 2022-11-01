const { parallel, series, src, dest, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// Add del dependency.
const del = require('del');
// Add uglify dependency.
/*const uglify = require('gulp-uglify');*/

/*const jsConfig = require('./src/config');*/
const tmpDir = './tmp';
const destDir = './dist/assets/js/';

function css() {
    return src('./assets/scss/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('./dist/assets/styles'), { sourcemaps: true })
        .pipe(browserSync.stream());
}

function jsBuild(done) {
    return src('./assets/js/**/*.js', { sourcemaps: true })
        .pipe(plumber())
        // Notice the name change.
        .pipe(concat('main.build.js'))
        .pipe(babel({
            presets: [
                ['@babel/env', {
                    modules: false,
                    targets: [
                        'last 2 versions',
                        'not dead',
                        'not < 2%',
                        'ie >= 11'
                    ],
                }]
            ]
        }))
        // And the destination change.
        .pipe(dest('./tmp'))
}

function jsConcat(done) {
    const files = [
        `${tmpDir}/main.build.js`,
        `${tmpDir}/main.deps.js`
    ];
    return src(files, { allowEmpty: true })
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(dest(destDir))
}

// Add a jsClean() task to delete the temporary *.deps.js and
// *.build.js files from the temporary directory.
function jsClean(done) {
    const files = [
        `${tmpDir}/main.deps.js`,
        `${tmpDir}/main.build.js`
    ];
    return del(files);
}
function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        files: [
            './**/*.html'
        ]
    });

    watch('./assets/scss/**/*.scss', css);
    watch('./assets/js/**/*.js', series(jsBuild, jsConcat, jsClean)).on('change', browserSync.reload);
    watch('./assets/es5-src/**/*.js', series(jsBuild, jsConcat, jsClean)).on('change', browserSync.reload);
}
// Add jsClean() as the last task in the series.
exports.myJS = series(
    jsBuild,
    jsConcat,
    jsClean
);
exports.css = css;
exports.default = browser;
