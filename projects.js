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