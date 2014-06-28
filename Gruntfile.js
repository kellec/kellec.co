module.exports = function( grunt ) {
	'use strict';

	var config = grunt.config;

	config.set( 'less.style', {
		options: {
			// Possible less include file paths
			paths: [
				'css'
			],
			compress: true
		},
		src: 'css/style.less',
		dest: 'css/style.css'
	} );

	config.set( 'watch.less', {
		files: 'css/**/*.less',
		tasks: ['less'],
		options: {
			interrupt: true
		}
	} );


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};