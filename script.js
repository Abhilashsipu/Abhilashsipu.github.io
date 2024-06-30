document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav__links .link a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        window.location.href = href;
      }
    });
  });
});


