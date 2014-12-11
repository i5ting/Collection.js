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