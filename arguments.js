function sum() {
	var sum = 0;
	for(var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

// console.log(sum(1,2,3,4,5));

Function.prototype.myBind = function(obj, arg1) {
	var oldArguments = Array.prototype.slice.call(arguments);
	this.call(obj, oldArguments);
}

object = {
	attribute: "attribute"
}

function fun (arg1) {
	for(var i = 1; i < arg1.length; i++) {
		console.log(arg1[i]);
	}
}

// fun.myBind(object, 1, 2, 3);

function curriedSum(numArgs) {
	var numbers = [];
	var _curriedSum = function (num) {
		numbers.push(num);
		if (numbers.length == numArgs) {
			var sum = 0;
			for(var i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			return sum;
		} else {
			return _curriedSum;
		}
	};
	return _curriedSum;
}

// console.log(curriedSum(3)(1)(2)(3));

Function.prototype.curry = function (numArgs) {
	var args = [];
	var that = this;
	var _curry = function (arg) {
		args.push(arg);
		if ( args.length == numArgs ) {
			return that.apply(null, args);
		} else {
			return _curry;
		}
	};
	return _curry;
}

console.log(sum.curry(3)(1)(2)(3));