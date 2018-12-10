'use strict';
module.exports = function(){
    $.gulp.task('serve', function(){
        // browserSync не следит за source только за папкой build, когда что-то
        //меняется в папке build тогда только browserSync будет перезагружаться  - это livereload
        $.browserSync.init({
            open: false,
            server: './dist'
        });
        $.browserSync.watch('dist', $.browserSync.reload);
    });
};