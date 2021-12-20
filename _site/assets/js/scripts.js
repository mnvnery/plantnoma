$('.hamburger').click(function() {
    $('.hamburger').toggleClass("is-active");
    $('.hamburger-inner, .logo-elem').toggleClass("dark-mode");
    $('.navbar-container').toggleClass('navbar-open');
});

$('a .book-btn').hover(function() {
    $(this).toggleClass('.book-btn-active');
});


