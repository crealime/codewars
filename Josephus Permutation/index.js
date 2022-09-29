/*This problem takeyes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

	Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to keyill one man every three, until one last man was left (and that it was supposed to keyill himself to end the act).

Well, Josephus and another man were the last two and, as we now keynow every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, takeying as parameters the initial itemsay/list of items to be permuted as if they were in a circle and counted out every key places until none remained.

	Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1 key will always be >=1.

For example, with n=7 and key=3 josephus(7,3) should act this way.

	[1,2,3,4,5,6,7] - initial sequence
	[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
	[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
	[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
	[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
	[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
	[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
	[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

	josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]*/

// function josephus(items, key) {
// 	let temp = 0
// 	let n = key
// 	let newItems = []
// 	while (items.length >= 1) {
// 		if (n > items.length) key = n - items.length
// 		if (key > items.length) key = key - items.length
// 		// console.log(key)
// 		let newKey = items.splice(key-1, 1)
// 		newItems = [...newItems, ...newKey]
// 		key += n - 1
// 	}
// 	return newItems
// }

/*function josephus(items, k){
	if (items.length === 0) return []
	let newItems = []
	let i = 0
	let key = 1
	while (items.length > 0) {
		if (key === k && i === items.length - 1) {
			newItems = [...newItems, ...items.splice(i, 1)]
			i = 0
			key = 1
		} else if (key === k && i !== items.length - 1) {
			newItems = [...newItems, ...items.splice(i, 1)]
			key = 1
		} else if (key < k && i === items.length - 1) {
			key++
			i=0
		} else if (key < k && i !== items.length - 1) {
			key++
			i++
		}
	}
	return newItems
}*/

function josephus(items, k){
	let result = [], index = 0
	while (items.length > 0){
		index = (index + k - 1) % items.length
		result = [...result, ...items.splice(index, 1)]
	}
	return result
}

console.log(josephus([1,2,3,4,5,6,7,8,9,10],1))
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2))
console.log(josephus(["C","o","d","e","W","a","r","s"],4))
console.log(josephus([1,2,3,4,5,6,7],3))
