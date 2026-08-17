/* ============================================
   PARSHANT SINGH — Portfolio JavaScript
   Nav toggle, active-section tracking, contact form.
   No particles, no custom cursor, no typing effect.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initSmoothScroll();
    initActiveNavLink();
    initContactForm();
});

/* ---------- Mobile nav toggle ---------- */
function initNavToggle() {
    const toggle = document.getElementById('navToggle');
    const index = document.getElementById('sidebarIndex');
    if (!toggle || !index) return;

    toggle.addEventListener('click', () => {
        const open = index.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    index.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            index.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ---------- Smooth scroll with header offset ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const offset = window.innerWidth <= 960 ? 64 : 0;
            const position = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        });
    });
}

/* ---------- Highlight current section in the index nav ---------- */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-index a');
    if (!sections.length || !navLinks.length) return;

    function updateActiveLink() {
        const scrollY = window.scrollY + 140;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

/* ---------- Contact form (client-side only, no backend) ---------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#name').value.trim();
        status.textContent = `Thanks${name ? ', ' + name : ''} — that's noted. Reach out by email if you don't hear back in a couple of days.`;
        form.reset();
    });
}
