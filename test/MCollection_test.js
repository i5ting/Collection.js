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
	
	
  module('Collection#WebSQL2', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
			
    }
  });
	
  asyncTest('is save' ,function() {
		
		
		
		
		//     expect(1);
		//
		// //
		//
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

		collection.all(function(data){

			ok(data.length >= 1,"only one record")
			start();
		});
		
		
		// setTimeout(function() {
	//         ok(true);
	//
	//         // After the assertion has been called,
	//         // continue the test
	//         start();
	//   }, 1000)
	// 	//
    // strictEqual(this.elems.mccccc(), this.elems, 'should be chainable');
  });
	
	
  // module('Collection#all', {
  //   // This will run before each test in this module.
  //   setup: function() {
  //     // this.elems = $('#qunit-fixture').children();
  //
  //   }
  // });
	
  // test('is awesomes', function() {
  //   expect(1);
  //
  // 		var collection = new Collection('message_test');
  //
  // 		collection.use_websql();
  //
  // 		collection.content_arr = [];
  //
  // 		var obj = {
  // 			type :'type',
  // 			mid :'mid',
  // 			uid :'uid',
  // 			uname :'uname',
  // 			avatar :'avatar',
  // 			sid :'sid',
  // 			sname:'sname',
  // 			timestamp :'timestamp',
  // 			msg :'msg'
  // 		}
  // 		// ok
  // 		collection.add(obj);
  //
  // 		collection.save();
  //
  // 		var data = collection.all();
  // 		console.log(data);
  //   equal(data.length, 1, 'should be awesome');
  // });



}(jQuery));
