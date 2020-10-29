const scrolls = document.querySelectorAll('.scroll');


document.addEventListener('scroll', (e) => {

    const scrollValue = window.scrollY;

    for(let i =0; i < scrolls.length; i++) {
        var pos = scrollValue * scrolls[i].dataset.rate;
        scrolls[i].style.transform = `translate3d(0px, ${pos}px, 0px`;
    }
})