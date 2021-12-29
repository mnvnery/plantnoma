$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
    $('.navbar-container').toggleClass('navbar-open');
});

$('.event-flex').hover(function() {
    $(this).children('.book-btn-container').children(".book-btn-active").toggle();
});


$('.navbar a').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.navbar-container').toggleClass('navbar-open');
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);