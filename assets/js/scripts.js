$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
    $('.navbar-container').toggleClass('navbar-open');
});

$('a .book-btn').hover(function() {
    $(this).toggleClass('.book-btn-active');
});


$('.navbar a').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.navbar-container').toggleClass('navbar-open');
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
});