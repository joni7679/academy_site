
// // custom scrollbar 
// let maindiv = document.querySelector("main");
// let cursor = document.querySelector(".custom-cursor");
// maindiv.addEventListener("mousemove", (event) => {
//     cursor.style.left=event.x+"px"
//     cursor.style.top=event.y+"px"
// })

function customscrollbar() {

    let maindiv = document.querySelector("main");
    let cursor = document.querySelector(".custom-cursor");

    maindiv.addEventListener("mousemove", (event) => {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY
        });
    });
}
customscrollbar();


function horizontalScrollbar() {
    let horizontalSection = document.querySelector('.workes-container');
    gsap.to('.workes-container', {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
            trigger: '.workes-container',
            start: 'center center',
            end: '+=2000px',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            // markers: true
        }
    });
}
// horizontalScrollbar()


function navbar() {
    let hamburgerIcon = document.querySelector(".hamburger-icon");
    let nav = document.querySelector(".nav");
    hamburgerIcon.addEventListener("click", () => {
        nav.classList.toggle("activenav")
    })
}

navbar();


let workesSection = document.querySelector(".workes-section");
console.log(workesSection)