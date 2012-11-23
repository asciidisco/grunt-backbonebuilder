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

##FAQ

**How do you ensure that a custom build works as expected?**

When a new version of this plugin is build, I run a couple of custom builds
(that will be automazically created for the test run) against Backones testsuite.
The build only passes, if all Backbone unit tests pass.

**Why doesn't Backbone allow you to do custom builds by default?**

Good question. The Backbone Core Dev Team doesn´t want to introduce a higher level of complexity.
I have different opinion, so I created this project.

**What happens when Backbone upgrades to a different version?**

Normally nothing, the builder is version agnostic & if a new version shows up, the builder should continue working as expect.

**Why This Project Was Created**

I wanted to make it easier for people to only take what they want/need.
You should read Greg Frankos article [Backbone.js: Convincing the Boss Guide](http://gregfranko.com/blog/backbone-dot-js-convincing-the-boss-guide/) he has some good points and explains them in detail.

**Why (or when) should I use custom builds**

Backbone.js Custom Builds allow you to individually download only the Backbone.js modules that your project needs (the only required module is the **Events** module).
With custom builds, you could use the Backbone Events class object as a standalone pub/sub solution, or only use Backbone Views to organize all of your app's event handlers, or use Backbone Models to store all of your applications data client-side, etc (all while minimizing your file size).  The possibilities are endless! (not really but you get the point)


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