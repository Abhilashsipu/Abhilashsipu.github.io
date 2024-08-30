// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Fade-In Effect on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
      }
  });
}, appearOptions);

fadeElements.forEach(fadeElement => {
  appearOnScroll.observe(fadeElement);
});

// Hero Section Animation
window.addEventListener('scroll', function() {
  const heroContent = document.querySelector('.hero-content');
  const scrollPosition = window.pageYOffset;
  
  heroContent.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  heroContent.style.opacity = 1 - scrollPosition / 600;
});
