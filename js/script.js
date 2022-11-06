function burgerMenu(selector) {
	let menu = $(selector);

	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
  let lines = $('.burger-menu__lines');
  let nav = menu.find('.burger-menu__nav');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu__active');
    lines.toggleClass('burger-menu__lines_active');
    nav.toggleClass('burger-menu__nav_active');
		if (menu.hasClass('burger-menu__active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');

