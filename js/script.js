function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu__active');
		if (menu.hasClass('burger-menu__active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');


// function burgerMenu(selector) {
// 	let menu = document.querySelector(selector);
// 	let button = document.querySelector('.burger-menu__button');
// 	let links = document.querySelector('.burger-menu__link');

// 	button.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		toggleMenu();
// 	});

// 	links.addEventListener('click', () => toggleMenu());


// 	function toggleMenu() {
// 		menu.classList.toggle('burger-menu_active', '.burger-menu__link');

// 		if (menu.classList.contains('burger-menu_active')) {
// 			document.querySelector('body').style.overflow = "hidden";
// 		} else {
// 			document.querySelector('body').style.overflow = "visible";
// 		}
// 	}
// }

// burgerMenu('.burger-menu');

