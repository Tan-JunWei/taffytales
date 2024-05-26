$(document).ready(function() {
    var boxes = $(".box"),
        stage = $(".stage"),
        animations = []; // Array to store individual animations

    // Set up initial perspective and transform style
    TweenLite.set(stage, {
        perspective: 1100,
        transformStyle: "preserve-3d"
    });

    // Create individual animations for each box and store them in the 'animations' array
    boxes.each(function(index, element) {
        var animation = new TimelineMax({ repeat: -1 });

        // Set initial rotation and transform origin for the box
        TweenLite.set(element, {
            rotationY: index * 360 / 13,
            transformOrigin: "50% 50% -420"
        });

        // Add rotation animation to the timeline
        animation.to(element, 20, {
            z: 0.01,
            rotationY: "+=359",
            ease: Linear.easeNone,
        });

        animations.push(animation); // Store the animation in the array
    });

    // Function to pause animation on hover
    function pauseAnimation() {
        animations.forEach(function(animation) {
            animation.pause(); // Pause each individual animation
        });
    }

    // Function to resume animation on mouse leave
    function resumeAnimation() {
        animations.forEach(function(animation) {
            animation.resume(); // Resume each individual animation
        });
    }

    // Add hover event listeners to stage
    stage.on("mouseenter", pauseAnimation).on("mouseleave", resumeAnimation);
});
