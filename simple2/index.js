const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    parallax.style.backgroundPositionY = - window.scrollY/2 + "px";
})