import gsap from "gsap";
// gsap.from(".card-1",
//     {
//         duration: 1,
//         y: 60,
//         opacity: 0,
//         ease: "power4.out",
//         delay: 0.2,
//         scale: 0.95,
//     }
// )
// gsap.from(".card-1",
//     {
//         duration: 1,
//         y: 60,
//         opacity: 0,
//         ease: "power4.out",
//         delay: 0.2,
//         scale: 0.95,
//     }
// )
// gsap.from(".card-2",
//     {
//         duration: 1,
//         y: 60,
//         opacity: 0,
//         ease: "power4.out",
//         delay: 0.4,
//         scale: 0.95,
//     }
// )
// gsap.from(".card-3",
//     {
//         duration: 1,
//         y: 60,
//         opacity: 0,
//         ease: "power4.out",
//         delay: 0.6,
//         scale: 0.95,
//     }
// )
const cards = document.querySelector(".repeat");
const animation = gsap.from(".cards", {
  duration: 0.6,
  y: 60,
    opacity: 0,
    delay: 0.2,
  ease: "power4.out",
  stagger: 0.2,
  scale: 0.95,
});
repeat.addEventListener("click", () => {
    animation.restart();
});
