'use strict';
module.exports = function(){
    //встроенный gulp ватчер
    $.gulp.task('watch', function(){
        //следит за файлами (файлы в source) и компилирует по очереди
        $.gulp.watch('./src/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./src/**/*.pug', $.gulp.series('pug'));
    });
};