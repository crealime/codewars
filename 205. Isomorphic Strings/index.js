// const isIsomorphic = function(s, t) {
// 	const map = s.split('').reduce((acc, el, i) => {
// 		acc[el] === t[i] || !acc[el] ? acc[el] = t[i] : acc[el] = false
// 		return acc
// 	},{})
// 	const map2 = t.split('').reduce((acc, el, i) => {
// 		if (Object.values(acc).includes(el)) acc[el] || ! acc[el] === s[i] || !acc[el]
// 		acc[el] === s[i] || !acc[el] ? acc[el] = s[i] : acc[el] = false
// 		return acc
// 	},{})
// 	console.log(map2)
// 	return !Object.values(map).some(el => !el) && !Object.values(map2).some(el => !el)
// }

// const isIsomorphic = function(s, t) {
// 	const map = s.split('').reduce((acc, el, i) => {
// 		acc[el] = t[i]
// 		return acc
// 	},{})
// 	const map2 = t.split('').reduce((acc, el, i) => {
// 		acc[el] = s[i]
// 		return acc
// 	},{})
//
// 	for (const key in map) {
// 		if (key === map2[key]) console.log(key)
// 	}
// }

const isIsomorphic = function(s, t) {
	const map = s.split('').reduce((acc, el, i) => {
		if (Object.keys(acc).includes(el) && acc[el] !== t[i]) acc[el] = false
		else if (acc[el] === t[i] || !acc[el]) acc[el] = t[i]
		else acc[el] = false
		return acc
	},{})
	const map2 = t.split('').reduce((acc, el, i) => {
		if (Object.keys(acc).includes(el) && acc[el] !== s[i]) acc[el] = false
		else if (acc[el] === s[i] || !acc[el]) acc[el] = s[i]
		else acc[el] = false
		return acc
	},{})
	return !Object.values(map).some(el => !el) && !Object.values(map2).some(el => !el)

}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))
console.log(isIsomorphic('aaeaa', 'uuxyy'))
