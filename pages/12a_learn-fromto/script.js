import gsap from "gsap";
const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(bar, {
    scaleY: 0.4, 
  }, {
  
      scaleY: 1.6, 
      duration: 0.6, 
      repeat: -1, 
      yoyo: true,
      delay: index * 0.1,
    //   transformOrigin: "bottom" 
    }
  )
});
