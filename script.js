document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.getElementById('explore-button');
    const firstSection = document.getElementById('chihiro');

    // Smooth scroll functionality for the 'Discover Their Tale' button
    if (exploreButton && firstSection) {
        exploreButton.addEventListener('click', function() {
            // Scroll smoothly to the first content section (Chihiro Ogino)
            firstSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Optional: Add a subtle animation/reveal for sections upon loading
    const sections = document.querySelectorAll('.character-section');
    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});