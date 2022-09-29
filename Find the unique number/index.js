/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

	findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

	The tests contain some very huge arrays, so think about performance.

	This is the first kata in series:*/

function findUniq(arr) {
	let test = arr.filter(el => el === arr[0])
	return test.length > 1 ? arr.filter(el => el !== arr[0])[0] : test[0]

	// or
	return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))

	// or

	arr.sort((a,b)=>a-b);
	return arr[0]==arr[1]?arr.pop():arr[0]
}

console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([ 1, 1, 2, 1, 1 ]))
