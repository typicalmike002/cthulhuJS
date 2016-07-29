module.exports = function(config){
	config.set({
		basePath: __dirname,
		frameworks: ['jasmine'],
		files: [
			'source/*.js',
			'source/spec/*.js'
		],
		browers: ['PhantomJS']
	})
};