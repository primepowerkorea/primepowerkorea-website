document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.nav-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
            btn.textContent = isOpen ? '✕' : '☰';
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
