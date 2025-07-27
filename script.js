// ========================================================= //
//  Kahaani Website Animations Script - Cool & Focused     //
// ========================================================= //

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
    const fadeElems = document.querySelectorAll('.fade-in');
    
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