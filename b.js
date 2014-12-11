// var defer = function () {
//     var pending = [], value;
//     return {
//         resolve: function (_value) {
//             value = _value;
//             for (var i = 0, ii = pending.length; i < ii; i++) {
//                 var callback = pending[i];
//                 callback(value);
//             }
//             pending = undefined;
//         },
//         then: function (callback) {
//             if (pending) {
//                 pending.push(callback);
//             } else {
//                 callback(value);
//             }
//         }
//     }
// };
//
//
// var oneOneSecondLater = function () {
//     var result = defer();
//     setTimeout(function () {
// 			// {a:1,b:2}
//         result.resolve([0,1,2]);
//     }, 1000);
//     return result;
// };
//
// oneOneSecondLater().then(function(i){
//
// });

var $ = require('./libs/miniobj.min');

var defer = {
	pending : [],
	value 	: '',
  resolve	: function (_value) {
      this.value = _value;
      for (var i = 0, ii = this.pending.length; i < ii; i++) {
          var callback = this.pending[i];
          callback(this.value);
      }
      this.pending = undefined;
			return this;
  },
  then: function (callback) {
      if (this.pending) {
          this.pending.push(callback);
      } else {
          callback(this.value);
      }
			return this;
  }
}
Class('Test',defer ,{
	constructor:function(){
		// this.result = this.defer();
	},
	ok:function(v){
		var that = this;
		setTimeout(function () {
			that.resolve(v);
			return this;
		}, 1000);
		return this;
	},
	next:function(){
		this.log("NEXT");
	},
	log:function(t){
		console.log('log log: ' + t);
	}
});

var a = new Test();

// setTimeout(function () {
// {a:1,b:2}
a.ok([0,1,2]).then(function(i){
	a.log(i[0] + ' - ' + i[1]);
}).then(function(i){
	a.log(i[0] + ' |-| ' + i[1]);
	a.next();
});
    
