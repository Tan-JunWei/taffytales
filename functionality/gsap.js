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