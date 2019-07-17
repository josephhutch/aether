

function cardPressed() {
    this.classList.add('card-hover');
}

function cardReleased() {
    this.classList.remove('card-hover');
}

function hamburgerMenuPressed() {
    if (this.parentNode.classList.contains('hamburger-menu-open')) {
        document.body.classList.remove('no-scroll');
        this.parentNode.classList.remove('hamburger-menu-open')
        this.setAttribute('aria-expanded', "false");
        document.body.style.paddingRight = 0 + "px";
    } else {
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.classList.add('no-scroll');
        this.parentNode.classList.add('hamburger-menu-open')
        this.setAttribute('aria-expanded', "true");
    }
    
}