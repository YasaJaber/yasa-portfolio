
document.addEventListener('DOMContentLoaded', function() {
  try {
    
    function safeGetElement(selector) {
      const element = document.querySelector(selector);
      return element;
    }

   
    let articlesSection = null;
    const articlesHeader = document.querySelector('#articles');
    if (articlesHeader) {
      
      articlesSection = articlesHeader.parentElement;
    
      if (articlesSection === document.body || articlesSection.clientHeight < 100) {
        articlesSection = document.querySelector('#articles + .container') || 
                         document.querySelector('#articles').nextElementSibling;
      }
    }

    const mainSections = [
      safeGetElement('.header'),
      safeGetElement('.landing'),
      articlesSection,
      safeGetElement('.gallery'),
      safeGetElement('.features'),
      safeGetElement('.testimonials'),
      safeGetElement('.team'),
      safeGetElement('.services'),
      safeGetElement('.our-skills'),
      safeGetElement('.work-steps'),
      safeGetElement('.events'),
      safeGetElement('.pricing'),
      safeGetElement('.stats'),
      safeGetElement('.contact'),
      safeGetElement('.footer')
    ];

    const allSections = mainSections.filter(section => section !== null && section !== undefined);

    console.log('Found ' + allSections.length + ' sections to animate');

    allSections.forEach((section, index) => {
      section.classList.add('section-transition');
      
      if (index % 3 === 1) {
        section.setAttribute('data-direction', 'left');
      } else if (index % 3 === 2) {
        section.setAttribute('data-direction', 'right');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        } else {
          entry.target.classList.remove('section-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    allSections.forEach(section => {
      observer.observe(section);
    });
  } catch (error) {
    console.error('Error in section transitions:', error);
  }
});
