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

	
	
  module('Collection#WebSQL', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
			
    }
  });

  test('is collection.content_arr length = 1', function() {
    expect(1);
		
		var collection = new Collection('message_test');
	
		collection.use_websql();
	
	
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
	
  test('is save', function() {
    expect(1);
		
		var collection = new Collection('message_test');
	
		collection.use_websql();
	
		collection.content_arr = [];
		
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
		
		collection.save();
		
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.mccccc(), this.elems, 'should be chainable');
  });
	
	
  module('Collection#all', {
    // This will run before each test in this module.
    setup: function() {
      // this.elems = $('#qunit-fixture').children();
			
    }
  });
	
  test('is awesomes', function() {
    expect(1);
		
		var collection = new Collection('message_test');
	
		collection.use_websql();
	
		collection.content_arr = [];
		
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
		
		collection.save();
		
		var data = collection.all();
		console.log(data);
    equal(data.length, 1, 'should be awesome');
  });

	
	
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
