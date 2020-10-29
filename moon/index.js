const bg = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const text = document.getElementById("text");

document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    bg.style.top = scrollValue * 0.5 + "px";
    moon.style.left = -scrollValue * 0.5 + "px";
    mountain.style.top = -scrollValue * 0.15 + "px";
    road.style.top = scrollValue * 0.15 + "px";
    text.style.top = scrollValue * 1 + "px";
})