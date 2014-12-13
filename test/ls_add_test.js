(function($) {
	
  module('LocalStorageCollection#add()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
			
    }
  });

  asyncTest('alfter add() collection.content_arr length = 1', function() {
    expect(1);
		
		var collection = new Collection('message_test');
		// collection.drop();
		// collection.use_websql();
		collection.empty();
		
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

		collection.add(obj);
		collection.add(obj);
		
		collection.save();
		
		setTimeout(function(){
			var content_arr = collection.all();
			
			equal(content_arr.length, 2, 'add a obj,collection.content_arr length should be 2');
			start();
		},200);
    // Not a bad test to run on collection methods.
    
  });
	
}(jQuery));
