const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav-mobile__menu-items');
const navShadow = document.querySelector('.nav-mobile__menu-shadow');
const dropdownItems = document.querySelectorAll('.nav-mobile__menu-item');
const dropdownFeatures = document.querySelector('.features-drop');
const dropdownCompany = document.querySelector('.company-drop');
const arrowDown = document.querySelectorAll('.nav-mobile__arrow-down');
const handleNavMobile = (e) => {
	nav.classList.toggle('nav-active');
	navShadow.classList.toggle('shadow-active');

	if (nav.classList.contains('nav-active')) {
		navBtn.setAttribute('src', './images/icon-close-menu.svg');
	} else {
		navBtn.setAttribute('src', './images/icon-menu.svg');
		dropdownCompany.classList.remove('dropdown-active');
		dropdownFeatures.classList.remove('dropdown-active');
		arrowDown[0].classList.remove('rotate');
		arrowDown[1].classList.remove('rotate');
	}
};
const handleDropdownMobile = (e) => {
	if (e.target.classList.contains('features')) {
		dropdownFeatures.classList.toggle('dropdown-active');
		arrowDown[0].classList.toggle('rotate');
	} else if (e.target.classList.contains('company')) {
		dropdownCompany.classList.toggle('dropdown-active');
		arrowDown[1].classList.toggle('rotate');
	} else {
		return;
	}
};
navBtn.addEventListener('click', handleNavMobile);
window.addEventListener('click', (e) => {
	if (e.target.classList.contains('shadow-active')) {
		nav.classList.remove('nav-active');
		navShadow.classList.remove('shadow-active');
	}
});
dropdownItems.forEach((item) =>
	item.addEventListener('click', handleDropdownMobile)
);
arrowDown.forEach((arrow) =>
	arrow.addEventListener('click', (e) => {
		e.stopPropagation();
	})
);
