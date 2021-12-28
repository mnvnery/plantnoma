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