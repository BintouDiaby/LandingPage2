// met à jour l’année automatiquement
document.getElementById("year").textContent = new Date().getFullYear();

// effet tilt (légère rotation au mouvement de souris)
document.querySelectorAll('.tilt').forEach(card => {
  const damp = 30;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rotX = ((y - r.height / 2) / damp);
    const rotY = (-(x - r.width / 2) / damp);
    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// effet d’apparition (reveal)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
});
document.querySelectorAll('.card, .hero-text').forEach(el => io.observe(el));
