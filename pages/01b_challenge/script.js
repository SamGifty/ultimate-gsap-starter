gsap.to(".card", { 
    duration: 2,
    x: 200,
    rotation: 360,
    yoyo: true,
    repeat: -1,
    scale: 1.5, // Adds scaling animation
    backgroundColor: "#ff0000", // Changes background color
    ease: "bounce", // Adds easing effect
    borderRadius: "50%", // Animates border radius to make it circular
});
