// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
	let arr = []
	for (let i = 0; i < str.length; i += 2) {
		arr.push(str.slice(i, i + 2))
	}
	if (str.length % 2 !== 0) arr[(str.length - 1) / 2] += '_'
	return arr

	//	Or
	// return (s+"_").match(/.{2}/g)||[]
}

console.log(solution("abcdefg"))
