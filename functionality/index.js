//hamburger menu
const navLinks = document.querySelector(".nav__links");
const navItems = document.querySelectorAll(".navItems");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const hbgIcon = document.querySelector(".hbgIcon");

function toggleMenu() {
  if (navLinks.classList.contains("showMenu")) {
    //close menu
    navLinks.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hbgIcon.style.display = "block";
  } 
  else {
    //open menu
    navLinks.classList.add("showMenu");
    closeIcon.style.display = "block";
    hbgIcon.style.display = "none";
  }
}

//button is hidden initially
closeIcon.style.display = "none";

hamburger.addEventListener("click", toggleMenu);

navItems.forEach( 
  function(navItems) { 
    navItems.addEventListener("click", toggleMenu);
  }
)

//image slider autoscroll effect
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const scrollWidth = slider.scrollWidth / slider.children.length;
  let currentIndex = 0;

  function scrollNext() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    slider.scrollLeft = currentIndex * scrollWidth;
  }

  function autoScroll() {
    setInterval(scrollNext, 6000); // Change image every 6 seconds
  }

  autoScroll();
});

//hidden, scroll effect

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
        else{
          entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

//button script

const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}