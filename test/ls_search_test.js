(function($) {
	
  module('LocalStorageCollection#search()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

	
  asyncTest('all default will return 2 result' ,function() {
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
			
			// ok
			collection.save(function(){
				console.log(1);
			});
		
			// setTimeout(function(){
				// collection.all(function(data){
		// 			// alert(is_exist);
		// 			console.log('data = '  + data);
		// 		});
			// },200);
			//
					
			setTimeout(function(){
				var obj = {
					uname:"uname"
				}
				collection.search(obj, function(data){
					console.log(data);
					ok(data.length == 2, "data array length should be 2");
					start();
					// collection.drop();
				});
			},100);
			
  });

  asyncTest('all default will return 1 result' ,function() {
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
			
			// ok
			collection.save(function(){
				console.log(1);
			});
		
			// setTimeout(function(){
				// collection.all(function(data){
		// 			// alert(is_exist);
		// 			console.log('data = '  + data);
		// 		});
			// },200);
			//
					
			setTimeout(function(){
				var obj = {
					uname: "uname",
					type : "type"
				}
				collection.search(obj, function(data){
					console.log(data);
					ok(data.length == 1, "data array length should be 1");
					start();
					// collection.drop();
				});
			},100);
			
  });
		
}(jQuery));
