const navLinks = document.querySelector(".nav__links");
const navItems = document.querySelectorAll(".navItems");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const hbgIcon = document.querySelector(".hbgIcon");

function toggleMenu() {
  if (navLinks.classList.contains("showMenu")) {
    navLinks.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hbgIcon.style.display = "block";
  } 
  else {
    navLinks.classList.add("showMenu");
    closeIcon.style.display = "block";
    hbgIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

navItems.forEach( 
  function(navItems) { 
    navItems.addEventListener("click", toggleMenu);
  }
)