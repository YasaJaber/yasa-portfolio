// Comprehensive section transitions for all sections on scroll
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Function to safely get an element and handle null case
    function safeGetElement(selector) {
      const element = document.querySelector(selector);
      return element;
    }

    // Try to get the articles section
    let articlesSection = null;
    const articlesHeader = document.querySelector('#articles');
    if (articlesHeader) {
      // Get the parent container of the header
      articlesSection = articlesHeader.parentElement;
      // If the parent is the body or too small, get the container after the header
      if (articlesSection === document.body || articlesSection.clientHeight < 100) {
        articlesSection = document.querySelector('#articles + .container') || 
                         document.querySelector('#articles').nextElementSibling;
      }
    }

    // Get all major sections by their class names
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

    // Filter out any null values (in case a section doesn't exist)
    const allSections = mainSections.filter(section => section !== null && section !== undefined);

    console.log('Found ' + allSections.length + ' sections to animate');

    // Add the transition class to all sections
    allSections.forEach((section, index) => {
      section.classList.add('section-transition');
      
      // Add different directions to alternate sections
      if (index % 3 === 1) {
        section.setAttribute('data-direction', 'left');
      } else if (index % 3 === 2) {
        section.setAttribute('data-direction', 'right');
      }
    });

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add class when section enters viewport, whether scrolling up or down
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        } else {
          // Remove class when section leaves viewport to re-enable animation when it returns
          entry.target.classList.remove('section-visible');
        }
      });
    }, {
      // Options: trigger when 10% of the element is visible
      threshold: 0.1,
      // Start animations slightly before sections come into full view
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    allSections.forEach(section => {
      observer.observe(section);
    });
  } catch (error) {
    console.error('Error in section transitions:', error);
  }
});
