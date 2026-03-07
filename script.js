// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md');
    } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md');
    }
});

// Create Flour Dust Particles
function createDustParticles() {
    const container = document.getElementById('dust-container');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'flour-dust';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Form Submission Handler
function handleFormSubmit(e) {
    e.preventDefault();
    showToast('Thank you! We\'ll be in touch within 24 hours to discuss your dream cake.');
    e.target.reset();
}

// Newsletter Handler
function handleNewsletter(e) {
    e.preventDefault();
    showToast('Welcome to the Sweet Crumbs family! Check your inbox for a treat.');
    e.target.reset();
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-32');
    
    setTimeout(() => {
        toast.classList.add('translate-y-32');
    }, 4000);
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    createDustParticles();
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.card-hover, section > div');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add to Cart Animation
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Add to Cart')) {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const originalText = button.innerHTML;
            button.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i><span>Added!</span>';
            button.classList.add('bg-green-500', 'text-white');
            lucide.createIcons();
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('bg-green-500', 'text-white');
                lucide.createIcons();
            }, 2000);
        });
    }
});

// Parallax Effect for Hero Images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-float, .animate-float-delayed');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

document.getElementById("year").textContent = new Date().getFullYear();