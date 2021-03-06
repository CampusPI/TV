'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('app/css/main.scss')
    .pipe($.sass({
      style: 'nested'
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/css'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter(require('jshint-stylish')))
    .pipe($.size());
});

gulp.task('svg', function () {
  return gulp.src('app/bower_components/animated-climacons/svgs/**')
    .pipe($.size())
    .pipe(gulp.dest('dist/svgs'));
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'svg', 'fonts'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe($.replace('bower_components/animated-climacons/', ''))
    .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
    .pipe(jsFilter)
    .pipe($.uglify({
      mangle: false
    }))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe($.replace('http://localhost:8080', 'http://server.pi.campinhos.pt'))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
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
    .listen(9069)
    .on('listening', function () {
        console.log('Started connect web server on http://localhost:9069');
      });
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:9069');
});

gulp.task('watch', ['styles','connect', 'serve'], function () {
  var server = $.livereload();

  gulp.watch([
    'app/*.html',
    '.tmp/css/**/*.css',
    'app/js/**/*.js',
  ]).on('change', function (file) {
    server.changed(file.path);
  });

  gulp.watch('app/css/**/*.scss', ['styles']);
  gulp.watch('app/js/**/*.js', ['scripts']);
});


//---------------------
// Isto precisa de ficar mais bonito e mais abrangente
// só correr o karma não vai chegar... ou então vai :X

var testFiles = [
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/js/*.js',
  'app/js/**/*.js',
  'test/spec/**/*.js'
];

gulp.task('ci', ['build'], function() {
  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: 'run',
      browsers: ['PhantomJS']
    }))
    .on('error', function(err) {
      console.log('Error: ',err.message);
      process.exit(1);
    });
});
