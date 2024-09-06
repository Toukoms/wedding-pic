// Add smooth scroll for buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
      window.scrollTo({
          top: document.querySelector('.about').offsetTop,
          behavior: 'smooth'
      });
  });
});
