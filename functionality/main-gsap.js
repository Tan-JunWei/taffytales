//gallery scroll effect
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true,
  }
})
.to('.img', {
  stagger:0.3,
  y: -600,
})

// Get the elements
const h1 = document.querySelector('.hide-on-scroll');
const imageSection = document.getElementById('image-section');

// Add scroll trigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: imageSection,
  start: '-103% 0%',
  end: '130% center',
  onEnter: () => h1.classList.remove('hide'),
  onLeave: () => h1.classList.add('hide')
});

//3rd text animation
gsap.fromTo(".text-animation-line3", {x:3000,y:900}, {x: 2400, y:-20, duration: 5, repeat:-1, scale:3, yoyo:true, ease:"expo.out",});

//2nd text animation
const lineTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
  yoyo: true,
});

lineTl
  .from(".text-animation2", {
    duration: 1,
    scaleX: 0,
    transformOrigin: "left",
    ease: "expo.inOut"
  })
  .from(
    ".text-animation2 .text-animation-line2",
    {
      y: "100%",
      duration: 0.8,
      ease: "expo.out"
    },
    "-=0.2"
  )
  .from(
    ".text-animation2",
    {
      css: { borderBottom: "4px solid white" },
      duration: 1,
      transformOrigin: "right",
      ease: "none"
    },
    "-=1"
  )
  .from(
    ".text-animation2 .text-animation-line2",
    {
      duration: 3,
      transformOrigin: "right",
      ease: "none",
      css: { color: "white" },
    },
    "-=2"
  );

//faq container
const container = document.querySelector(".faq-container");
const sections = gsap.utils.toArray(".faq-container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".faq-container",
    pin: true,
    scrub: 1,
    end: "+=5000",
    //snap: 1 / (sections.length - 1),
    //markers: true,
  }
});

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
    //markers:true,
  }
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  //stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      //markers: true
    }
  });
});
