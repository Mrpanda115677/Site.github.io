
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-links');
  if (toggle && navList) toggle.addEventListener('click', () => navList.classList.toggle('open'));
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-section').forEach(s => io.observe(s));
});
