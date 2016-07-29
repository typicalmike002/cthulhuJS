const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      report  = require('jasmine-reporters'),
      Server  = require('karma').Server;


gulp.task('watch', () => 
    gulp.watch('source/**/*.js', ['default', 'tests'])
);

gulp.task('tests', (done) => 
    new Server({
        configFile: __dirname + '/karma.config.js',
        singleRun: false,
        autoWatch: true
    }, done).start()
);

gulp.task('default', () =>
    gulp.src('./source/cthulhu.js')
        .pipe(plugins.webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(''))
);
