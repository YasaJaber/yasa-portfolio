
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      
      setTimeout(function() {
        if (window.scrollX > 0) {
          window.scrollTo(0, window.scrollY);
        }
      }, 100);
    });
  });
  
  window.addEventListener('scroll', function() {
    if (window.scrollX > 0) {
      window.scrollTo(0, window.scrollY);
    }
  });
});
