// ✅ Smooth scroll ke setiap section saat klik menu navbar
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ Alert saat tombol Gabung diklik
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.textContent.trim().toLowerCase().includes("gabung")) {
      alert("Silakan isi formulir pendaftaran di bagian 'Bergabung' ya!");
    }
  });
});

<<<<<<< HEAD

=======
// ✅ Hamburger menu untuk tampilan mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  const icon = hamburger.querySelector("i");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Ganti ikon hamburger -> X dan sebaliknya
    if (icon) {
      if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
      } else {
        icon.classList.replace("fa-times", "fa-bars");
      }
    }
  });
}

>>>>>>> aa8224d24cb86d6e5b66a681ed9514d256f66f32
// Filter tombol logika
const filterButtons = document.querySelectorAll('.filter-btn');
const kontenItems = document.querySelectorAll('.konten-item');

function filterKonten(category) {
  kontenItems.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hapus active class dari semua
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Ambil kategori
    const category = button.getAttribute('data-category');
    filterKonten(category);
  });
});

// Tampilkan semua saat awal load
window.addEventListener('DOMContentLoaded', () => {
  filterKonten('all');
});

<<<<<<< HEAD
function openDetail() {
  const detailPage = document.getElementById("detailPage");
  if (detailPage) {
    detailPage.style.display = "block";
    window.scrollTo(0, detailPage.offsetTop); // Scroll ke halaman detail
  }
}

function closeDetail() {
  const detailPage = document.getElementById("detailPage");
  if (detailPage) {
    detailPage.style.display = "none";
    window.scrollTo(0, 0); // Kembali ke atas
  }
}

const counters = document.querySelectorAll('.counter');
  const speed = 200; // Semakin kecil semakin cepat

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
=======
>>>>>>> aa8224d24cb86d6e5b66a681ed9514d256f66f32


