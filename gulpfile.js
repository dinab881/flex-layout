'use strict';

/*global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')()
};

var csso = require('gulp-csso');

gulp.task('default', function(){
    //dest - выход из трубы
    return gulp.src('css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('build/css'))
});*/

//реквайрим модуль sass.js
// и сразу делаем вызов (регистрируем таски), чтобы
//иметь к нему доступ
/*require('./gulp/tasks/sass.js')();
$.gulp.task('sass');*/

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    del: require('del'),
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    fs: require('fs')
};

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

//автоматически запускаем все команды 1ой командой gulp
//series - последовательно
$.gulp.task('default', $.gulp.series(
    'clean',
    //параллельно можно вызывать независимые команды
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));