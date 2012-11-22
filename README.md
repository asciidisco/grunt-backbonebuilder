# grunt-backbonebuilder

Build your custom backbone experience with grunt.

[![Build Status](https://secure.travis-ci.org/asciidisco/grunt-backbonebuilder.png?branch=master)](http://travis-ci.org/asciidisco/grunt-backbonebuilder)

## Getting Started
Install this grunt plugin next to your project's gruntfile with: `npm install grunt-backbonebuilder`

Then add this line to your project's `grunt.js` gruntfile.

```javascript
grunt.loadNpmTasks('grunt-backbonebuilder');
```

### Resources

+ [grunt](https://github.com/cowboy/grunt)
+ [getting-started](https://github.com/cowboy/grunt/blob/master/docs/getting_started.md)
+ [backbone.js](http://backbonejs.org)

## Documentation
Load the grunt-backbonebuilder task as described in 'Getting started' and add your backbone builder
configuration to your grunt file:

Example backbonebuilder grunt file config entry:

```javascript
// ... grunt file contents
    backbone: {
      // the parts you want to include in your build
      // possible values ['Model', 'Collection', 'View', 'Events', 'Router']
      include: ['Model', 'Collection', 'View', 'Events'],
      // output location (relative to your grunt.js file location)
      dest: 'build/backbone.custom.js',
      // if you want to use a different backbone version than the build in one (0.9.2)
      // then just add a reference to your own UNMINIFIED backbone version
      src: 'vendor/mySpecialBackboneVersion.js'
    },
// ... even more grunt file contents
```

## Release History

### 0.1.0
+ Initial Release

## License
Copyright (c) 2012 asciidisco
Licensed under the MIT license.