window.navFunctionWrapper = function () {
            
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
    
    console.log('test')
}