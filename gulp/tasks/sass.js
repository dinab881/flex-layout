'use strict';

module.exports = function() {
    $.gulp.task('sass', function () {
        return $.gulp.src('./src/styles/main.scss')
            .pipe($.gp.sourcemaps.init()) //инизилизация sourcemaps
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'Opera 12.1'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./dist/css'))
    });
};