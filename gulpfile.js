var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe($.useref.assets({searchPath: 'app'}))
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    gulp.watch([
        'app/*.html',
        'app/css/**/*.css',
        'app/js/**/*.js',
    ]).on('change', function (file) {
        server.changed(file.path);
    });
});

gulp.task('ci', function() {
  return gulp.src('app/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter(require('jshint-stylish')));
});
