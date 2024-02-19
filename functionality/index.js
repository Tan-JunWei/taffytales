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

//ripple button script

const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}

function hideShowCart() {  
  const cart = document.querySelector('.cart');
  if (cart.classList.contains("showCart")){
    cart.classList.remove("showCart"); //close cart
  }

  else {
    cart.classList.add("showCart");
  }
  console.log(cart.classList); // Just for debugging
  console.log(cart);
}
