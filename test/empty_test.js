(function($) {
	
  module('Collection#empty()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  asyncTest('empty will content length = 0' ,function() {
  		expect(1);

  		var collection = new Collection('message_test');
   	 	collection.use_websql();
			collection.empty();
			
			setTimeout(function(){
				collection.all(function(data){
					// alert(is_exist);
					ok(data.length == 0, "data array length should be 2");
					start();
				});
			},200);
	});
		
  asyncTest('get alfter all() called' ,function() {
  		expect(1);

  		var collection = new Collection('message_test');
   	 	collection.use_websql();
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
		
			var obj1 = {
				type :'type 1',
				mid :'mid 1',
				uid :'uid 1',
				uname :'uname',
				avatar :'avatar',
				sid :'sid',
				sname:'sname',
				timestamp :'timestamp',
				msg :'msg'
			}
			// ok
			collection.add(obj);
			collection.add(obj1);
			
			collection.save();

			
			setTimeout(function(){
				collection.all(function(data){
					// alert(is_exist);
					ok(data.length == 2, "data array length should be 2");
					start();
				});
			},200);
			
  });
	
}(jQuery));
