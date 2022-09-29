/*Given the triangle of consecutive odd numbers:

	1
3     5
7     9    11
13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/


function sumOfOddNumbers(n) {
	let m = 1
	for (let i = 1, s = 2; i < n; i++) {
		m += s
		s += 2
	}
	let k = m
	for (let i = 1; i < n; i++) {
		k += 2
		m += k
	}
	// return m

	// or

	return n ** 3
}

console.log(sumOfOddNumbers(42))