(function($) {
	
  module('Collection#add()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
			
    }
  });

  test('alfter add() collection.content_arr length = 1', function() {
    expect(1);
		
		var collection = new Collection('message_test');
		collection.drop();
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
	
}(jQuery));
