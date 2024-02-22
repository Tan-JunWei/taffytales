//words reveal scroll effect
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

