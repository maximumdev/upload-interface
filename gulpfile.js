// For SASS

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect-php'),
    browsersync = require('browser-sync').create();

// gulp.task('webserver', function() {
//     gulp.src('build/')
//         .pipe(webserver({
//             livereload: true,
//             open: true
//         }));
// });

// gulp.task('browsersync', function() {
// 	browsersync.init({
// 		server: {
// 			baseDir: 'build'
// 		}
// 	})
// });

let server = new connect();

gulp.task('connect-sync', function() {
    server.server({
        base: 'build',
        port: 8000
    }, function() {
        browsersync.init({
            proxy: '127.0.0.1:8000'
        });
    });
    gulp.watch('build/*').on('change', function() {
        browsersync.reload();
    });
});

gulp.task('disconnect', function() {
    server.closeServer();
});

gulp.task('default', ['connect-sync', 'disconnect']);








// gulp.task('sass', function () {
//     return sass('process/sass/style.scss', {
//       sourcemap: true,
//       style: 'compressed'
//     })
//     .on('error', function (err) {
//         console.error('Error!', err.message);
//     })
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('build/upload-interface/css'));
// });
