/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

	summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8*/

function summation(num) {
	// let arr = []
	// while (num > 0) {
	// 	arr.push(num--);
	// }
	// return arr.reduce((acc, el) => acc + el, 0)
	return new Array(num).fill(1).reduce(acc => acc + --num, num)
}

console.log(summation(8))
