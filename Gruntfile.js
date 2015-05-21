/*
 * Grunt Build System
 * Author: Junghyun Han (kazikai84@gmail.com)
 * License: Hochul Shin, Junghyun Han
 * Dependency : Grunt module and NPM Package
 */

/*jshint node:true */
module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      "2": {
        src: '*/*.js'
      }
    },
    assemble: {
      options: {
          helpers: ['conf/helpers/*.js']
      },
      "2": {
        options: {
          layoutdir: '2/layouts',
          layout: 'default.hbs',
          partials: ['2/includes/**/*.hbs']
        },
        files: [
          { expand: true, cwd: '2/pages', src: [ '*.hbs', '**/*.hbs'], dest: 'dist/2/' }
        ]
      },
      "3": {
        options: {
          layoutdir: '3/layouts',
          layout: 'default.hbs',
          partials: ['3/includes/**/*.hbs']
        },
        files: [
          { expand: true, cwd: '3/pages', src: [ '*.hbs', '**/*.hbs'], dest: 'dist/3/' }
        ]
      },
      "4": {
        options: {
          layoutdir: '4/layouts',
          layout: 'default.hbs',
          partials: ['4/includes/**/*.hbs']
        },
        files: [
          { expand: true, cwd: '4/pages', src: [ '*.hbs', '**/*.hbs'], dest: 'dist/4/' }
        ]
      }
    },
    connect: {
      "test-server": {
        options: {
          port: 8000,
          protocol: 'http',
          base: '.',
          middleware: function (connect, options) {
             return [
                require('grunt-connect-proxy/lib/utils').proxyRequest,
                connect.static(String(options.base)),
                connect.directory(options.base)
             ];
          }
        },
        proxies: [
          {
            context: ['/jqm'],
            host: '127.0.0.1',
            port: 8000,
            https: false,
            changeOrigin: false,
            xforward: false,
            debug: false,
            headers: {
            }
          }
        ]
      }
    },
    watch: {
      options: {
        interrupt: true
      },
      "2": {
        files: ['2/**/**/*.hbs'],
        tasks: ['newer:assemble:2', 'copy:2']
      },
      "3": {
        files: ['3/**/**/*.hbs', '3/**/**/*.*'],
        tasks: ['newer:assemble:3', 'copy:3']
      },
      "4": {
        files: ['4/**/**/*.hbs', '4/**/**/*.*'],
        tasks: ['newer:assemble:4', 'copy:4']
      }
    },
    //useminPrepare: {
    //  "2": {
    //    src: 'dist/2/**/*.html',
    //    options: {
    //      dest: 'dist/2'
    //    },
    //  },
    //  "3": {
    //    src: 'dist/3/**/*.html',
    //    options: {
    //      dest: 'dist/3'
    //    }
    //  },
    //  "4": {
    //    src: 'dist/4/**/*.html',
    //    options: {
    //      dest: 'dist/4'
    //    }
    //  }
    //},
    //usemin: {
    //  html: 'dist/**/*.html'
    //},
    copy: {
      common:{
        src: ['common/*', 'common/*/*', 'common/*/*/*'],
        dest: 'dist/'
      },
      "2": {
        src: ['2/resources/*/*/*/*/*', '2/resources/*/*','2/resources/*/*/*','2/resources/*/*/*/*'],
        dest: 'dist/'
      },
      "3": {
        src: ['3/resources/*/*/*/*/*', '3/resources/*/*','3/resources/*/*/*','3/resources/*/*/*/*'],
        dest: 'dist/'
      },
      "4": {
        src: ['4/resources/*/*/*/*/*', '4/resources/*/*','4/resources/*/*/*','4/resources/*/*/*/*'],
        dest: 'dist/'
      },
      "kazikai":{
         src: ['dist/*'],
         dest:['/var/www/jqm/dist/']
      }
    },
    clean: {
      "2": ["dist/2", ".tmp"]
    }
  });


  // Default task.
  grunt.registerTask('default', []);
  grunt.registerTask('dev:2', ['assemble:2', 'copy:2', 'connect:test-server', 'watch']);
  grunt.registerTask('dev:3', ['assemble:3', 'copy:3', 'connect:test-server', 'watch']);
  grunt.registerTask('dev:4', ['assemble:4', 'copy:4', 'connect:test-server', 'watch']);
  grunt.registerTask('build:2',['assemble:2', 'copy:2', 'copy:common']);
  grunt.registerTask('build:3',['assemble:3', 'copy:3', 'copy:common']);
  grunt.registerTask('build:4',['assemble:4', 'copy:4', 'copy:common']);
  //grunt.registerTask('deploy:2',['build:2', 'kazikaicopy']);
  //grunt.registerTask('build:is', ['clean:is', 'assemble:is', 'useminPrepare:is', 'concat', 'uglify', 'cssmin', 'copy:is', 'usemin']);
  //grunt.registerTask('build:merchant', ['clean:merchant', 'assemble:merchant', 'useminPrepare:merchant', 'concat', 'uglify', 'cssmin', 'copy:merchant', 'usemin']);
  grunt.registerTask('build', ['build:2', 'build:3', 'build:4']);
};
