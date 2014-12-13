(function($) {
	var collection;
	
  module('Collection#save()', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
		
    },
		teardown:function(){
			setTimeout(function(){
				
			},1000);
		}
  });
	
  asyncTest('save 2 object this.content_arr to storage' ,function() {
		expect(1);

			collection = new Collection('message_test');
			collection.use_websql();
			collection.empty();
			
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
			
			
			var obj2 = {
				type :'type2',
				mid :'mid2',
				uid :'uid2',
				uname :'uname',
				avatar :'avatar',
				sid :'sid',
				sname:'sname',
				timestamp :'timestamp',
				msg :'msg'
			}
			// ok
			collection.add(obj2);
	

			setTimeout(function(){
				collection.save(function(){
					ok(true, "save succ");
					start();
					//succ
				},function(){
					//fail
					
				});
		},200);
		
  });
	  //
  // asyncTest('save this.content_arr to storage' ,function() {
  // 		expect(1);
  //
  // 			collection = new Collection('message_test');
  // 			collection.use_websql();
  // 			 collection.empty();
  // 			// collection.content_arr = [];
  // 			var obj = {
  // 				type :'type',
  // 				mid :'mid',
  // 				uid :'uid',
  // 				uname :'uname',
  // 				avatar :'avatar',
  // 				sid :'sid',
  // 				sname:'sname',
  // 				timestamp :'timestamp',
  // 				msg :'msg'
  // 			}
  // 			// ok
  // 			collection.add(obj);
  //
  // 		setTimeout(function(){
  // 			collection.save(function(){
  // 				collection.is_exist(function(is_exist){
  // 					// alert(is_exist);
  // 					ok(is_exist == true, "save之后，应该建表，并有一条记录的。");
  // 					start();
  // 				});
  //
  // 				collection.drop();
  // 				//succ
  // 			},function(){
  // 				//fail
  // 				ok(true, "save失败");
  // 				start();
  // 			});
  //
  //
  //
  // 		},200);
  //
  //
  // });
	
}(jQuery));
