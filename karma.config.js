module.exports = (karma) => {
	karma.set({
		basePath: __dirname,
		singleRun: false,
        autoWatch: true,
        logLevel: karma.LOG_INFO, // karma.LOG_DEBUG || karma.LOG_INFO
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
        	'source/*.js': ['coverage'],
        	'source/modules/*.js': ['coverage']
        },
        coverageReporter: {
        	type: 'text'
        },
		files: [
			'cthulhu.min.js',
			'source/spec/*.js'
		],
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-coverage'
		]
	})
};