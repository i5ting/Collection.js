MCollection
===========

MCollection is mobile collection: a data access object wrapper for all mobile platform


##  data storage solution for all mobile platform

发现一个很严重的问题，android不支持websql

##  一、查看storage在浏览器中的支持情况

http://html5test.com/compare/feature/storage-localStorage/storage-sqlDatabase/storage-indexedDB.basic.html


- localstorage（key-value存储）
- websql（sqlite）
- indexdb（NoSQL）

## 二、分析上面的结果

### android平台

- Android 1.6 »	都不支持
- Android 2.x »	不支持indexdb，其他都支持
- Android 3.2 » 不支持indexdb，其他都支持
- Android 4.0 » 支持localstorage，但不支持其他2种
- Android 4.0+ » 都支持

### iOS平台

- iOS 2.2 » 支持websql，其他都不支持
- iOS 3.1 -- iOS 7.0 » 不支持indexdb，其他都支持
- iOS 8.0 »

### Windows Phone 平台

- Windows Phone 7 	»	都不支持
- Windows Phone 7.5 »	只是支持localstorage
- Windows Phone 8 	»	只是不支持websql
- Windows Phone 8.1 »只是不支持websql

### 总结

- 绝大部分都支持localstorage，不支持localstorage的如
	- ios2.2，可以选websql，
	- Android 4.0 » 只能用localstorage
	- Windows Phone 7，没有任何选择
- 支持第二好的是websql
- 支持最差的是indexdb

所以我们的解决方案是

1. 如果有indexdb就用indexdb
1. 若果有websql就用websql
1. 什么都没有的时候，使用localstorage存，近于万能


## 解决方案

### 需求

1. 如果有indexdb就用indexdb
1. 若果有websql就用websql
1. 什么都没有的时候，使用localstorage存，近于万能

### 抽象

这其实和orm很类似，比如hibernate或者其他实现，实际上都是通过对object的操作，
完成对各种db的操作。

- 第一步，定出dao层的接口，我称之为Collection
- 第二步，写Collection的localstorage实现
- 第三步，写Collection的websql实现（至此，大部分情况都可用了）
- 第四步，写Collection的indexdb实现

### 示例

```
<script src="./js/storage_test.js"></script>
<script>
	//清楚所有缓存
	LocalStore.clear();
	
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
	// ok
	collection.save();
	
	
	var arr = collection.all();
	
	console.log(arr);
	
	var m = collection.get(0);
	console.log(m.type);
	
	
	// collection.drop();
 	// var saved_obj = collection.save(obj);
	// var myobj = collection.get(saved_obj.id);
	// var arr = collection.all();
	
</script>
```


- https://github.com/sudhirj/simply-deferred


## promise/A+

有的时候，你只需要简单

https://github.com/kriskowal/q/blob/v1/design/README.js#L129

```
var defer = function () {
    var pending = [], value;
    return {
        resolve: function (_value) {
            value = _value;
            for (var i = 0, ii = pending.length; i < ii; i++) {
                var callback = pending[i];
                callback(value);
            }
            pending = undefined;
        },
        then: function (callback) {
            if (pending) {
                pending.push(callback);
            } else {
                callback(value);
            }
        }
    }
};


var oneOneSecondLater = function () {
    var result = defer();
    setTimeout(function () {
			// {a:1,b:2}
        result.resolve([0,1,2]);
    }, 1000);
    return result;
};

oneOneSecondLater().then(function(i){
	console.log(i[0] + ' - ' + i[1]);
});
```


