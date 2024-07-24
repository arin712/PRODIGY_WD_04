// This script is optional. You can add JavaScript code here for functionalities like animations or interactive elements on your website.

// Example: Add a smooth scrolling effect for internal links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetSection = document.querySelector(this.hash);
    if (targetSection) {
      e.preventDefault();
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetY = targetSection.offsetTop - headerHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  });
});