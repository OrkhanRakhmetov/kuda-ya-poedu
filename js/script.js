function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button', '.burger-menu__lines');
	let links = menu.find('.burger-menu__link');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu__active');
	  
	  if (menu.hasClass('burger-menu__active')) {
		$('html').css('overlow', 'hidden');
	  } else {
		$('html').css('overlow', 'visible');
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

