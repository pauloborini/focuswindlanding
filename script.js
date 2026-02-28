document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer para animações de entrada
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros itens
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });

            // Abre o item clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const drawer = document.getElementById('mobile-drawer');
    const menuButton = document.querySelector('.mobile-menu-btn');
    const closeButton = drawer ? drawer.querySelector('.drawer-close') : null;

    const setDrawerOpen = (open) => {
        if (!drawer || !menuButton) return;
        drawer.classList.toggle('open', open);
        menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('drawer-open', open);
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (open && scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.paddingRight = '';
        }
    };

    if (menuButton && drawer) {
        menuButton.addEventListener('click', () => {
            const isOpen = drawer.classList.contains('open');
            setDrawerOpen(!isOpen);
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => setDrawerOpen(false));
    }

    if (drawer) {
        drawer.addEventListener('click', (e) => {
            if (e.target === drawer) {
                setDrawerOpen(false);
            }
        });

        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setDrawerOpen(false));
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setDrawerOpen(false);
        }
    });

    // Navbar Blur Effect on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.9)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // Smooth Scroll para Links Internos (Compatibilidade extra)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
