/*global exports:true, require:true */

/*
 * grunt-backbonebuilder
 * https://github.com/asciidisco/grunt-backbonebuilder
 *
 * Copyright (c) 2012 asciidisco
 * Licensed under the MIT license.
 */

(function () {
  'use strict';

  var fs = require('fs');
  var _ = null;
  var combinations = {
    Collection: ['Header', 'Setup', 'Events', 'Model', 'Collection', 'sync', 'Helpers'],
    Model: ['Header', 'Setup', 'Events', 'Model', 'sync', 'Helpers'],
    View: ['Header', 'Setup', 'Events', 'View', 'Helpers'],
    Router: ['Header', 'Setup', 'Events', 'Router', 'History', 'Helpers'],
    Events: ['Header', 'Setup', 'Events', 'Helpers'],
    All: ['Header', 'Setup', 'Events', 'Model', 'Collection', 'View', 'History', 'Helpers']
  };

  // extract a part by its character index
  var extract = function (source, start, end) {
    return source.substring(start, end);
  };

  // parts are seperated by annotations
  var getBackboneParts = function (bbsource) {
    var parts = {
      Header: '',
      Setup: '// Initial Setup',
      Events: '// Backbone.Events',
      Model: '// Backbone.Model',
      Collection: '// Backbone.Collection',
      Router: '// Backbone.Router',
      History: '// Backbone.History',
      View: '// Backbone.View',
      sync: '// Backbone.sync',
      Helpers: '// Helpers'
    };


    // index & module helper
    var lastPos = 0;
    var temp = 0;
    var keys = Object.keys(parts);

    // extract every module
    keys.forEach(function (key, idx) {
      temp = typeof keys[idx + 1] !== 'undefined' ? bbsource.search(parts[keys[idx + 1]]) : bbsource.length;
      parts[key] = extract(bbsource, lastPos, temp);
      lastPos = temp;
    });

    return parts;
  };

  // glues the backbone parts together again
  var setUpNeededParts = function (combinations, parts, backboneSrc) {
    var src = '';
    var allCombinations = [];

    parts.forEach(function (part) {
      allCombinations.push(combinations[part.toLowerCase() !== 'sync' ? _.str.capitalize(part.toLowerCase()) : part.toLowerCase()]);
    });

    var neededParts = _.union.apply(_, allCombinations);
    var backboneParts = getBackboneParts(backboneSrc);
    var finalCombination = _.intersection(combinations.All, neededParts);

    finalCombination.forEach(function (part) {
      src += backboneParts[part.toLowerCase() !== 'sync' ? _.str.capitalize(part.toLowerCase()) : part.toLowerCase()];
    });

    return src;
  };

  exports.init = function(grunt) {
    var exports = {};
    _ = grunt.utils._ || grunt.util._;

    var Transport = function (type, content) {
      this.type = type;
      this.content = content;
    };

    // cuts the backbone file & glues it together again
    exports.build = function (options, contentCb) {
      var backbonePath = require.resolve('backbone');
      var fileContents = '';
      var backboneSource = '';

      // check if we should use a different backbone version
      if (options.config.src) {
        try {
          backbonePath = options.config.src;
          backboneSource = String(fs.readFileSync(backbonePath));
        } catch (e) {
          contentCb(new Transport('error', 'Could not load given backbone version at "' + options.config.src + '"'), options);
          return null;
        }
      } else {
          backboneSource = String(fs.readFileSync(backbonePath));
      }

      // check if the version is minified (and throw some error when it is)
      if (backboneSource.length < 40000) {
          contentCb(new Transport('error', 'Backbone builder needs an unminified version of Backbone to build ("' + options.config.src + '")'), options);
          return null;
      }

      // get the custom backbone src
      fileContents = setUpNeededParts(combinations, options.config.include || combinations.All, backboneSource);

      // call callback with the transport object
      contentCb(new Transport('content', fileContents), options);

      return true;
    };

    return exports;
  };

}).call(this);