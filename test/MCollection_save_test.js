(function($) {
	
  module('Collection#save()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  asyncTest('is save:mean save this.content_arr to storage' ,function() {
		expect(1);
		
		var collection = new Collection('message_test');
		collection.drop();
		
		collection.use_websql();
		// collection.content_arr = [];
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

		setTimeout(function(){
			collection.is_exist(function(is_exist){
				// alert(is_exist);
				ok(is_exist == true, "save之后，应该建表，并有一条记录的。");
				start();
			});
		},200);
		
  });
	
}(jQuery));
