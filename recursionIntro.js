//1. a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function foo(n) {
	if(n <= 0)
		return 0;
	return foo(n-1);
}

// a function that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
	if(expo <= 1)
		return 1;
	return base * recursiveExponent(base, expo - 1);
}

// a function that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
	if(!arr.length)
		return arr;
	let last = arr.pop();
	recursiveMultiplier(arr, num);
	arr.push(last * num);
	return arr;
}