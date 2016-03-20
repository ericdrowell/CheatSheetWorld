module.exports = function(grunt) {

  // Project configuration.
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    staticHandlebars: {
      simpleTarget: {
        files: {
          'dist/*/*.html': 'src/*/*.hbs'
        }
      } 
    },
    watch: {
      src: {
        files: ['src/**/*'],
        tasks: ['staticHandlebars'],
        options: {
          spawn: false,
        },
      }
    }
  };

  grunt.initConfig(config);

  // Load plugins
  grunt.loadNpmTasks('grunt-static-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
};