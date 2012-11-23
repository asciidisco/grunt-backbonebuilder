# grunt-backbonebuilder [![Build Status](https://secure.travis-ci.org/asciidisco/grunt-backbonebuilder.png?branch=master)](http://travis-ci.org/asciidisco/grunt-backbonebuilder)

> Build your custom backbone experience with grunt.

Note: This plugin is inspired by [Greg Frankos](https://github.com/gfranko) [Backbone custom builder](http://gregfranko.com/backbone/customBuild/) & related to Backbones [issue #1598](https://github.com/documentcloud/backbone/issues/1598)

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-backbonebuilder`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-backbonebuilder');
```

### Overview

Inside your `grunt.js` file, add a section named `backbone`. This section specifies the options for the backbone custom build you want to create.

#### Parameters

##### include ```array```

This is used to determine which backbone functionality you want to include in your custom build

> Available options: ['Model', 'Collection', 'View', 'Events', 'Router']

##### dest ```string```

The outputfile destination & filename.

> The pathname is set relative to your Gruntfile

##### src ```string``` (optional)

This option allows you to chose a different Backbone source file, if it´s not set, the builder will automatically take the latest version available from npm (currently 0.9.2).

> The pathname is set relative to your Gruntfile

#### Config Example

```javascript
    backbone: {
      include: ['Model', 'Collection', 'View', 'Events'],
      dest: 'build/backbone.custom.js',
      src: 'vendor/mySpecialBackboneVersion.js'
    }
```

### Resources

+ [grunt](https://github.com/cowboy/grunt)
+ [getting-started](https://github.com/cowboy/grunt/blob/master/docs/getting_started.md)
+ [backbone.js](http://backbonejs.org)
+ [Backbone custom builder](http://gregfranko.com/backbone/customBuild/)

## Release History
Take a look at the [Changelog](https://github.com/asciidisco/grunt-backbonebuilder/blob/master/CHANGELOG)

## License
Copyright (c) 2012 asciidisco
Licensed under the [MIT license](https://github.com/asciidisco/grunt-backbonebuilder/blob/master/MIT-LICENSE).