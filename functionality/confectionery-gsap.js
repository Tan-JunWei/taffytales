$(window).on("load",function(){
	var boxes = $(".box"),
		stage = $(".stage");
	
	TweenLite.set(stage, {
		perspective : 1100,
		transformStyle: "preserve-3d"
	});

	boxes.each(function(index, element){
		TweenLite.set(element, {
			rotationY : index * 360 / 13,
			transformOrigin: "50% 50% -420"
		});
		TweenMax.to(element, 20, {
			z: 0.01,
			rotationY: "+=359",
			repeat: -1, // 20
			ease: Linear.easeNone		
		});
	});
});

console.log("gsap");