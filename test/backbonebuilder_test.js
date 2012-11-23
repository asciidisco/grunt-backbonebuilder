var grunt = require('grunt');
// Load local tasks.
grunt.loadTasks('tasks');

exports['require'] = {
  setUp: function(done) {
	'use strict';
    // setup here
    done();
  },
  // test if building from a custom minified file fails
  'testIfBuildingFromMinifiedFails': function(test) {
	'use strict';
    var builder = require(__dirname + '/../lib/builder').init(grunt);
    test.expect(2);

    // tests here
	builder.build({
		config: {include: ['View'], src: __dirname + '/../node_modules/backbone/backbone-min.js'}
	}, function (transport) {
		test.equal(transport.type, 'error', 'Error has been detected');
		test.equal(transport.content.search('unminified'), 26, 'Correct error message has been send');
		test.done();
	});
  },
  // test if building from a custom input file works
  'testIfBuildingFromCustomInputWorks': function(test) {
	'use strict';
    var builder = require(__dirname + '/../lib/builder').init(grunt);
    test.expect(2);

    // tests here
	builder.build({
		config: {include: ['All'], src: __dirname + '/../node_modules/backbone/backbone.js'}
	}, function (transport) {
		test.equal(transport.type, 'content', 'Transport type set correctly');
		test.equal(transport.content.length, 53107, 'File could be build');
		test.done();
	});
  },
  // test if building from a custom input file works
  'testIfBuildingFromNonExistingFileFails': function(test) {
	'use strict';
    var builder = require(__dirname + '/../lib/builder').init(grunt);
    test.expect(2);

    // tests here
	builder.build({
		config: {include: ['All'], src: __dirname + 'xxx.js'}
	}, function (transport) {
		test.equal(transport.type, 'error', 'Transport type set correctly');
		test.equal(transport.content.search('Could not load given'), 0, 'Correct error message has been send');
		test.done();
	});
  },

};
