let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let menuAdaptive = document.querySelector('.menu-adaptive');

burger.addEventListener('click', () => {
    menuAdaptive.classList.remove('hide');
})

close.addEventListener('click', () => {
    menuAdaptive.classList.add('hide');
})