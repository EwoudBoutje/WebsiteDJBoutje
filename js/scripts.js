// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active navigation highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
            const scroll = window.pageYOffset;
            heroSection.style.transform = `translateY(${scroll * 0.5}px)`;
        }
    });

    // Initialize gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        const images = [
            'I-Joeplala2024.jpg',
            'jeugdhuis de vlinder.jpg',
            'logo.png',
            'November To Remember 2024_1.jpg',
            'November To Remember 2024_2.jpg'
        ];

        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${image}`;
            imgElement.alt = 'Gallery Image';
            galleryGrid.appendChild(imgElement);
        });
    }
});
