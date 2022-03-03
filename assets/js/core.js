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