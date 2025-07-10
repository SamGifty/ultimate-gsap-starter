
// Create the animation
gsap.to('.box', {
    duration: 2,
    x: 300, // Move 300px to the right
    y: 200,
    rotationY: 360, // Rotate 360 degrees
    scale: 1.5, // Scale up to 1.5x
    ease: "power2.out", // Apply easing
    repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation on repeat
        opacity: 0.8 // Set opacity to 0.8
    });
