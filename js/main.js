let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let menuAdaptive = document.querySelector('.menu-adaptive');



burger.addEventListener('click', () => {
    menuAdaptive.classList.remove('hide');
    document.body.style.overflow = 'hidden';
})

close.addEventListener('click', () => {
    menuAdaptive.classList.add('hide');
    document.body.style.overflow = 'auto';

})

$('.about-slider').slick({
    variableWidth: true,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 899,
        settings: {
            centerMode: true,
            slidesToShow: 1
        }
    }],
});