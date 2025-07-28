    
    
    
    
    // --- MOBILE MENU FUNCTIONALITY ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    // Check if the button and nav exist on the page
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // This adds or removes the 'menu-open' class on the <nav> element
            nav.classList.toggle('menu-open');
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Elegant Letter-by-Letter Title Animation ---
    const title = document.querySelector('.hero-content h1');
    if (title) {
        // Wrap each letter in a span for individual animation
        title.innerHTML = title.textContent.trim().split('').map(char => 
            char === ' ' ? ' ' : `<span>${char}</span>`
        ).join('');

        // Apply a staggered animation delay to each letter span
        const letters = title.querySelectorAll('span');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${0.4 + index * 0.08}s`;
        });
    }

    // --- 2. Smooth Fade-in on Scroll for other elements ---
    const fadeElems = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.2 }); // Element must be 20% visible
    
    fadeElems.forEach(elem => {
        scrollObserver.observe(elem);
    });
});
