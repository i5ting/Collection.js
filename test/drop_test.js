(function($) {
	
  module('Collection#drop()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
	
  asyncTest('before drop table' ,function() {
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
			collection.save(function(){
				collection.is_exist(function(is_exist){
					// alert(is_exist);
					ok(is_exist == true, "save之后，应该建表，并有一条记录的。");
					start();
				});
			});
		
  });
	
  asyncTest('alfter drop table' ,function() {
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
			collection.save();
			

			collection.drop(function(){
				collection.is_exist(function(is_exist){
					// alert(is_exist);
					ok(is_exist == false, "drop之后，应该没有该表的。");
					start();
				});
			});
  });
	
}(jQuery));
