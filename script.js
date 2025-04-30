document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');

    menuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('nav-open');
        document.body.classList.toggle('menu-open');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            if (mobileNav.classList.contains('nav-open')) {
                mobileNav.classList.remove('nav-open');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.concept-content, .features-comparison__container, .service-grid, .portfolio-showcase, .blog-entries, .cta-content');

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        element.classList.add('fade-element');
        fadeInObserver.observe(element);
    });

    // Number counter animation
    const countElements = document.querySelectorAll('.count-up');

    countElements.forEach(element => {
        const finalValue = parseInt(element.textContent);
        let currentValue = 0;
        const duration = 2000; // in milliseconds
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const increment = finalValue / totalFrames;

        const animate = () => {
            currentValue += increment;
            if (currentValue < finalValue) {
                element.textContent = Math.round(currentValue);
                requestAnimationFrame(animate);
            } else {
                element.textContent = finalValue;
            }
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        counterObserver.observe(element);
    });

    // Portfolio navigation
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');

    // Add functionality for portfolio navigation here
    // This would typically involve changing the visible portfolio item

    // Add CSS class for menu open state
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            body.menu-open {
                overflow: hidden;
            }
        </style>
    `);
});