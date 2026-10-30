// Highlight the nav link for the section currently in view
const links = document.querySelectorAll('nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((sec) => sec && observer.observe(sec));
