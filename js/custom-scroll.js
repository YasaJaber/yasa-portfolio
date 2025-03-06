document.addEventListener('DOMContentLoaded', function() {
  const goDownButton = document.querySelector('.go-down');
  
  if (goDownButton) {
    goDownButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      const footer = document.getElementById('footer');
      
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(function() {
          window.scrollTo(0, window.scrollY);
        }, 100);
      }
    });
  }
  
  window.addEventListener('scroll', function() {
    if (window.scrollX > 0) {
      window.scrollTo(0, window.scrollY);
    }
  });
});
