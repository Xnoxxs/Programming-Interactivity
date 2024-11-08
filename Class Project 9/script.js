// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

// Apply observer to each section
document.querySelectorAll('.page').forEach(page => {
    observer.observe(page);
});

// Scroll to Top function for the button on the fourth page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
