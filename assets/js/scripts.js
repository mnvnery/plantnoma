$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
    $('.navbar-container').toggleClass('navbar-open');
});

$('.book-btn').hover(function() {
    console.log($(this).children("span"));
    $(this).next("span").toggle();
});


$('.navbar a').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.navbar-container').toggleClass('navbar-open');
    $('.hamburger-inner, .logo-elem').toggleClass("light-background");
});