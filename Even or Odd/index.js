/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
	return number % 2 ? 'Odd' : 'Even'
}

console.log(even_or_odd(4))
console.log(even_or_odd(7))
console.log(even_or_odd(-42))
