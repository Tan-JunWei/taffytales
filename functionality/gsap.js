let tl = gsap.timeline({ //test
  scrollTrigger: {
      trigger: ".animated-element",
      start: "-500% center",
      end: "500% center",
      scrub:true,
      markers:true,
  }
})

tl.to('.animated-element',{
    x:800,
})