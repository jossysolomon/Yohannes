// Typing animation
var typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer 💻",
    "Backend Developer ⚙️",
    "UI/UX Designer 🎨",
    "Creative Coder 💡",
    "Freelancer 🌍"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});

// ===== Scroll Sections Active Link =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // ===== Sticky Navbar =====
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ===== Scroll to Top Button =====
  let goTop = document.querySelector('.go-top');
  goTop.classList.toggle('active', window.scrollY > 400);
};

// ===== Scroll Reveal Animation =====
ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Add Floating Animation to Image =====
const homeImage = document.querySelector('.home-img img');
if (homeImage) {
  homeImage.addEventListener('mouseenter', () => {
    homeImage.style.transform = 'scale(1.05)';
    homeImage.style.transition = '0.4s ease';
  });
  homeImage.addEventListener('mouseleave', () => {
    homeImage.style.transform = 'scale(1)';
  });
}

// ===== Show Scroll Up Button =====
const goTopBtn = document.querySelector('.go-top');
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    alert("✅ Message sent successfully!");
    form.reset();
  } else {
    alert("❌ Oops! Something went wrong.");
  }
});
