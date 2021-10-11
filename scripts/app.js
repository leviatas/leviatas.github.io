//21935

for (let r = 0, g = 0, b = 0, i = 0; i < 2100; i++) {
	const el = document.createElement('div')

	if (r <= 254) {
		r++
	} else if (r <= 255 && g <= 254) {
		g++
		console.log(r, g)
	} else if (r <= 255 && g <= 255 && b <= 254) {
		b++
		g--
	}

	el.style.backgroundColor = `rgb(${r},${g},${b})`

	document.getElementById('container').appendChild(el)
}
