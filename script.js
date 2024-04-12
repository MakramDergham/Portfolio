const percentage = document.getElementsByClassName('percentage')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.skill');
  
      if (entry.isIntersecting) {
        percentage[0].style.width="70%"
        percentage[1].style.width="67%"
        percentage[2].style.width="25%"
        percentage[3].style.width="55%"
        return; 
      }
  
        percentage[0].style.width="0%"
        percentage[1].style.width="0%"
        percentage[2].style.width="0%"
        percentage[3].style.width="0%"
    });
  });

  observer.observe(document.querySelector('#percentage_container'));

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

function showSidebar(){
  document.querySelector(".sidebar").style.display = "block"
}
function closeSidebar(){
  document.querySelector(".sidebar").style.display = "none"
}