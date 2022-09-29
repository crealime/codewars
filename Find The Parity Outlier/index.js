/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

	Examples
	[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

function findOutlier(integers) {
	return integers.reduce((acc, el) => {return el % 2 === 0 ? ++acc : acc}, 0) > 1 ? integers.filter(el => el % 2 !== 0)[0] : integers.filter(el => el % 2 === 0)[0]

	//	 Or
	let even = integers.filter(a=>a%2===0);
	let odd = integers.filter(a=>a%2!==0);
	return even.length===1? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([109070621,-80792955,-80181127,-178241487,-153758639,175462338]))
