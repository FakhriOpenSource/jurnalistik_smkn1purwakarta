// Smooth scroll ke setiap section saat klik menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Alert saat tombol Gabung diklik
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.textContent.includes("Gabung")) {
      alert("Silakan isi formulir pendaftaran di bagian 'Bergabung' ya!");
    }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

