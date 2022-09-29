function ln(x) {
	if (x <= 0) return NaN
	let y = 0, z = 0, k = .1

	function larger() {
		k /= 10
		while (x > z) {
			y += k
			z = Math.E ** y
		}
		if (k < .000000000001) return y
		return lesser()
	}

	function lesser() {
		k /= 10
		while (x < z) {
			y -= k
			z = Math.E ** y
		}
		return larger()
	}

	return larger()


	// while (+x.toFixed(2) > +z.toFixed(2)) {
	// 	y += .01
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(3) < +z.toFixed(3)) {
	// 	y -= .001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(4) > +z.toFixed(4)) {
	// 	y += .0001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(5) < +z.toFixed(5)) {
	// 	y -= .00001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(6) > +z.toFixed(6)) {
	// 	y += .000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(7) < +z.toFixed(7)) {
	// 	y -= .0000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(8) > +z.toFixed(8)) {
	// 	y += .00000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(9) < +z.toFixed(9)) {
	// 	y -= .000000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(10) > +z.toFixed(10)) {
	// 	y += .0000000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(11) < +z.toFixed(11)) {
	// 	y -= .00000000001
	// 	z = Math.E ** y
	// }
	// while (+x.toFixed(12) > +z.toFixed(12)) {
	// 	y += .000000000001
	// 	z = Math.E ** y
	// }
	// return Math.floor(y * 100000000000) / 100000000000
}

console.log(ln(2.71828))
console.log(ln(10))
console.log(ln(1))

/////////////
/*

function ln(x) {
	if (x <= 0) { return NaN }
	let min = -37
	let max = 47
	let e = 2.718281828459045
	while (max - min > 1e-12) {
		let mid = (max + min) / 2
		let power = e ** mid
		if (x < power) { max = mid }
		else { min = mid }
	}
	return (max + min) / 2
}

const ln = x => x ? require('vm').runInNewContext('Math.log')(x) : NaN;

function ln(x) {
	if (x <= 0) return NaN;
	if (x > 2) return ln(x / 2) + ln(2);
	let result = 0;
	for (let n = 0; n < 50; n++) {
		result += ((x - 1)/(x + 1))**(2 * n + 1)/(2 * n + 1);
	}
	return 2 * result;
}

/////////////////////

function ln(x) {
	if (x <= 0) return NaN
	const m = 100
	const ln2 = 0.6931471805599453
	const out = Math.PI / (2 * M(1, 2 ** (2 - m) / x)) - m * ln2
	return out
}

function M(x, y, times = 0) {
	if (times === 10) return x
	return M((x + y) / 2, Math.sqrt(x * y), times + 1)
}

///////////////////////

function ln(x) {
	if (x <= 0) return Math.NaN;
	if (x > 2) return ln(x / 2) + ln(2);
	let result = 0;
	for (let n = 0; n < 50; n++) {
		result += ((x - 1)/(x + 1))**(2*n + 1)/(2*n + 1);
	}
	return 2*result;
}

///////////////////

function ln(x) {
	return x<=0?NaN:x<=1?2*Math.atanh(1-2/(x+1)):1+ln(x/Math.E)
}*/
