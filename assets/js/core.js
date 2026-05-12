function cardPressed() {
    this.classList.add('card-hover');
}

function cardReleased() {
    this.classList.remove('card-hover');
}

function hamburgerMenuPressed() {
    if (this.checked) {
        this.setAttribute('aria-expanded', "true");
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.classList.add('no-scroll');
    } else {
        this.setAttribute('aria-expanded', "false");
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = 0 + "px";
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.blog-card').forEach(function (card) {
        card.addEventListener('touchstart', function () {
            cardPressed.call(card);
        }, { passive: true });

        card.addEventListener('touchend', function () {
            cardReleased.call(card);
        }, { passive: true });

        card.addEventListener('touchmove', function () {
            cardReleased.call(card);
        }, { passive: true });

        card.addEventListener('touchcancel', function () {
            cardReleased.call(card);
        }, { passive: true });
    });
});
