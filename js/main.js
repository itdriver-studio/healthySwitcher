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
    autoplay: true,
    variableWidth: true,
    slidesToShow: 2,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 899,
        settings: {
            slidesToShow: 1
        },
        breakpoint: 768,
        settings: {
            arrows: false,
        },
    }],
});