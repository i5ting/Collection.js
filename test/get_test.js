(function($) {
	
  module('Collection#get(index)', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
	

  test('alfter add() collection.content_arr length = 1', function() {
    expect(2);
		

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
		
		var o0 = collection.get(0);
		var o1 = collection.get(1);
		
		equal(o0.mid, 'mid', 'o0.mid should be mid');
		equal(o1.mid, 'mid 1', 'o1.mid should be mid 1');
  });
	
  asyncTest('get alfter all() called' ,function() {
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
			
			
			
			setTimeout(function(){
				collection.all(function(data){
					// alert(is_exist);
					ok(data.length == 2, "data array length should be 2");
					start();
				});
			},200);
			
  });
	
}(jQuery));
