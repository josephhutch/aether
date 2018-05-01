

function cardPressed() {
    this.classList.add('card-hover');
}

function cardReleased() {
    this.classList.remove('card-hover');
}

function hamburgerMenuPressed() {
    if (document.body.classList.contains('no-scroll')) {
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = 0 + "px";
    } else {
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.classList.add('no-scroll');
    }
    
}