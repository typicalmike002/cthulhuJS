const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      Server  = require('karma').Server;


gulp.task('watch', () => 
    gulp.watch('source/**/*.js', ['tests'])
);

gulp.task('tests', ['default'], (done) => 
    new Server({
        configFile: __dirname + '/karma.config.js'
      }, done).start()
);

gulp.task('default', () =>
    gulp.src('./source/cthulhu.js')
        .pipe(plugins.webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(''))
);
