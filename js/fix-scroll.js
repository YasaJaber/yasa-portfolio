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
  
  const sendMessageBtn = document.querySelector('.contact form [type="submit"]');
  if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', function(e) {
      setTimeout(function() {
        if (window.scrollX > 0) {
          window.scrollTo(0, window.scrollY);
        }
      }, 50);
      
      e.preventDefault();
      
      alert('تم إرسال الرسالة بنجاح! (هذه رسالة تجريبية فقط)');
    });
  }
  
  const formInputs = document.querySelectorAll('.contact form input, .contact form textarea');
  if (formInputs.length > 0) {
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        setTimeout(function() {
          if (window.scrollX > 0) {
            window.scrollTo(0, window.scrollY);
          }
        }, 50);
      });
    });
  }
  
  window.addEventListener('scroll', function() {
    if (window.scrollX > 0) {
      window.scrollTo(0, window.scrollY);
    }
  });
});
