/*
 * css-sections
 * https://github.com/upstage/css-sections
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: 'assets',
          layout: 'src/templates/layouts/default.hbs',
          partials: ['src/templates/partials/*.hbs'],
          data: ['src/data/*.{json,yml}']
        },
        files: {
          './': ['src/templates/pages/*.hbs']
        }
      }
    },

    less: {
      options: {paths: 'src/less'},
      component: {
        src:  'src/less/sections.less',
        dest: 'assets/sections.css'
      }
    },

    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      docs: {
        files: [
          {expand: true, cwd: './', ext: '.html', src: ['*.html'], dest: './'}
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      example: ['*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'less', 'assemble', 'prettify']);
};

