module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
      },
      my_target: {
        files: {
			'public/all.min.js': ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'my.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/all.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'my.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['my.css', 'my.js', 'index.html', 'Gruntfile.js'],
        tasks: ['default'],
        options: {
          livereload: true,
          spawn: false,
        },
      },
    }
  });

  // Run
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default tasks
  grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);

};
