var Sifter = require('./libs/sifter')
	
var contacts_array = [{
	type :'type',
	mid :'mid',
	uid :'uid',
	uname :'uname',
	avatar :'avatar',
	sid :'sid',
	sname:'sname',
	timestamp :'timestamp',
	msg :'msg'
},
{
	type :'s 1',
	mid :'mid 1',
	uid :'uid 1',
	uname :'uname',
	avatar :'avatar',
	sid :'sid',
	sname:'sname',
	timestamp :'timestamp',
	msg :'msg'
}]


function search(obj,cb){
	var defaults_config = {
		field: 'name', 
		direction: 'asc'
	}

	var result  = '';
	function get_search_result(contents, one_field, field_search_content, limit){
	  // 缓存，不能每次搜索都创建这么大得对象。
		this.sifter = new Sifter(contents);

		result = this.sifter.search('' + field_search_content, {
		  fields: [one_field],
		  sort: [{field: 'id', direction: 'asc'}],
			limit: limit
		});
		console.log('start---------------------------\n'+result.items);
		return get_contents_arr(result);
	};

	function get_contents_arr(search_content){
		var result = search_content
		var arr = [];
		for(var i in result.items){
			var cid = result.items[i]['id']
			var contact = contacts_array[cid];
			arr.push(contact);
		}
		console.log(arr);
		return arr
	}
	// obj有几个对象就要处理几次，不然无法实现and操作的。因地制宜

	var result_arr = [];

	var contents = contacts_array;
	
	for(var attr in obj){
		
		var one_field = attr;
		var field_search_content = obj[attr];
		var limit = contents.length;
		contents = get_search_result(contents, one_field, field_search_content, limit);
	}
		
	cb(contents);
}

search({
	uname :'uname',
	type :'type'
},function(data){
	console.log('****************下面是返回结果\n');
	console.log(data);
})


search({
	uname :'uname',
	// type :'type'
},function(data){
	console.log('****************下面是返回结果\n');
	console.log(data);
})

search({
	uname :'uname',
	avatar :'avatar',
	sid :'sid',
	sname:'sname',
	timestamp :'timestamp',
	msg :'msg'
},function(data){
	console.log('****************下面是返回结果\n');
	console.log(data);
})


search({
	type :'s 1',
	mid :'mid 1',
	uid :'uid 1',
	uname :'uname',
	avatar :'avatar',
},function(data){
	console.log('****************下面是返回结果\n');
	console.log(data);
})