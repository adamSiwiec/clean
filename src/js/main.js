var $ = require('jquery');
var ScrollReveal = require('scrollreveal')

// Scrolls to the selected menu item on the page
$('.smooth-scrolling').click(function() {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);
});


// Reveal
window.sr = ScrollReveal({
    reset: true
});

sr.reveal('.reveal', {
    duration: 800
}, 500);
sr.reveal('.revealnoani', {
    duration: 1000
});


$(document).ready(function() {
    $("body").css("visibility", "visible");
});
