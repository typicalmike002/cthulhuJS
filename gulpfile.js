const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      report  = require('jasmine-reporters');

gulp.task('watch', () => 
    gulp.watch('source/**/*.js', ['default'])
);

gulp.task('default', () =>
    gulp.src('cthulhu.js')
        .pipe(plugins.webpack( require('./webpack.config.js') ))
        // .pipe(plugins.jasmine({
        //     reporter: new reporters.JUnitXmlReporter()
        // }))
        .pipe(gulp.dest(''))
);