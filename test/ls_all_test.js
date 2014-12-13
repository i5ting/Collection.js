(function($) {

  module('LocalStorageCollection#all()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });


  asyncTest('0 default will return this.content_arr[]' ,function() {
  		expect(1);

  		var collection = new Collection('message_test');
			collection.empty();
   	 	// collection.use_websql();

			setTimeout(function(){
				var arr = collection.all()
				ok(arr.length == 0, "data array length should be 0");
				start();
			},200);

  });


  asyncTest('all default will return this.content_arr[]' ,function() {
  		expect(1);

  		var collection = new Collection('message_test');
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

			// ok
			collection.save(function(){

			});

			setTimeout(function(){
				var arr = collection.all()
				ok(arr.length == 2, "data array length should be 2");
				start();
			},200);

  });

}(jQuery));
