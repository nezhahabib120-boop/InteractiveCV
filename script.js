lucide.createIcons();
AOS.init({ duration: 1000, once: false, mirror: true });

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

if (menuToggle) menuToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
if (menuClose) menuClose.addEventListener('click', () => mobileMenu.classList.add('hidden'));

navLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});