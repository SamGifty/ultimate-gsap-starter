import gsap from "gsap";
const showToastLoop = () => {
  gsap.to(".toast", {
    opacity: 1,
    y: -120,
    scale:1,
    duration: 0.5,
    ease: "power2.out",

    onComplete: () => {
      gsap.to(".toast", {
        opacity: 0,
        y: 0,
        duration: 0.5,
        scale:0.8,
        delay: 2,
        ease: "power2.in",
        onComplete:() => {
          setTimeout(showToastLoop, 2500); // Restart the loop
        }
      })
    }
  })
};
showToastLoop();



