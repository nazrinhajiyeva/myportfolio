// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
        a.addEventListener("click", function() {
            navCollapse.classList.remove("show");
        })
    })
    // typed-text
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });