
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav-bar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').addClass('nav-bar-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-bar-up');
        }
    }
    
    lastScrollTop = st;
}

function cardPressed() {
    this.classList.add('card-link-wrapper-active');
}

function cardReleased() {
    this.classList.remove('card-link-wrapper-active');
}