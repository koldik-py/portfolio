const readyTitle = () => {
	const elem = document.querySelector('.info__title');
	const name = 'Belyshev Ilya';

	const go = (x)=> {
		if (x < name.length) {
			elem.textContent += name[x++]
			elem.innerHTML += "<span>&nbsp;</span>";
			return setTimeout( () => {
				elem.querySelector("span").remove()
				go(x)
			}, 8*10)
		} else {
			elem.innerHTML += "<span>&nbsp;</span>";
		}
	}

// go(0)

}

readyTitle()