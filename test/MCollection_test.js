(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
	var collection = new Collection('message_test');
	
	collection.use_websql();
	
	
	
  module('Collection#WebSQL', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
			
    }
  });

  test('is collection.content_arr length = 1', function() {
    expect(1);
		
		var obj = {
			type :'type',
			mid :'mid',
			uid :'uid',
			uname :'uname',
			avatar :'avatar',
			sid :'sid',
			sname:'sname',
			timestamp :'timestamp',
			msg :'msg'
		}
		// ok
		collection.add(obj);
		
    // Not a bad test to run on collection methods.
    equal(collection.content_arr.length, 1, 'add a obj,collection.content_arr length should be 1');
  });
	
  // test('is chainable', function() {
  //   // expect(1);
  //   // Not a bad test to run on collection methods.
  //   // strictEqual(this.elems.mccccc(), this.elems, 'should be chainable');
  // });
  //
  // test('is awesome', function() {
  //   // expect(1);
  //   // strictEqual(this.elems.mccccc().text(), 'awesome0awesome1awesome2', 'should be awesome');
  // });
  //
  // module('jQuery.mccccc');
  //
  // test('is awesome', function() {
  //   // expect(2);
  //   // strictEqual($.mccccc(), 'awesome.', 'should be awesome');
  //   // strictEqual($.mccccc({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  // });
  //
  // module(':mccccc selector', {
  //   // This will run before each test in this module.
  //   setup: function() {
  //     this.elems = $('#qunit-fixture').children();
  //   }
  // });
  //
  // test('is awesome', function() {
  //   // expect(1);
  //   // Use deepEqual & .get() when comparing jQuery objects.
  //   // deepEqual(this.elems.filter(':mccccc').get(), this.elems.last().get(), 'knows awesome when it sees it');
  // });

}(jQuery));
