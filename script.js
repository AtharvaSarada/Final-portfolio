// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    // Initially hide all answers
    answer.style.display = 'none';
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.display = 'none';
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
            answer.style.display = 'block';
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send the data to a server here
        console.log('Form data:', data);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Skill Bars Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Trigger skill bar animation when skills section is visible
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Lazy Loading for Images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Theme Toggle with persistence
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update button icon
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Initialize theme toggle
document.addEventListener('DOMContentLoaded', initThemeToggle);

// Add dark theme styles
const darkThemeStyle = document.createElement('style');
darkThemeStyle.textContent = `
    .dark-theme {
        background-color: #1f2937;
        color: #f9fafb;
    }
    
    .dark-theme .navbar {
        background: rgba(31, 41, 55, 0.95);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .dark-theme .nav-link {
        color: #f9fafb;
    }
    
    .dark-theme .nav-link:hover,
    .dark-theme .nav-link.active {
        color: #60a5fa;
    }
    
    .dark-theme .nav-link.active::after {
        background: #60a5fa;
    }
    
    .dark-theme .project-card,
    .dark-theme .skill-category,
    .dark-theme .certification-card,
    .dark-theme .course-item,
    .dark-theme .language-card,
    .dark-theme .interest-item,
    .dark-theme .soft-skill-item,
    .dark-theme .contact-form,
    .dark-theme .faq-item,
    .dark-theme .profile-card {
        background: #374151;
        color: #f9fafb;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .dark-theme .contact-form {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .timeline-content {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .page-header {
        background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
    }
    
    .dark-theme .hero {
        background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
    }
    
    /* Additional dark theme text and element styles */
    .dark-theme h1,
    .dark-theme h2,
    .dark-theme h3,
    .dark-theme h4,
    .dark-theme h5,
    .dark-theme h6 {
        color: #f9fafb;
    }
    
    .dark-theme p {
        color: #d1d5db;
    }
    
    .dark-theme .hero-subtitle,
    .dark-theme .hero-description {
        color: #d1d5db;
    }
    
    .dark-theme .stat-label {
        color: #d1d5db;
    }
    
    .dark-theme .profile-title {
        color: #d1d5db;
    }
    
    .dark-theme .detail-item {
        color: #d1d5db;
    }
    
    .dark-theme .detail-item i {
        color: #60a5fa;
    }
    
    .dark-theme .interest-item h3,
    .dark-theme .skill-category h3,
    .dark-theme .project-content h3,
    .dark-theme .course-item h3,
    .dark-theme .language-item h3,
    .dark-theme .soft-skill-item h3,
    .dark-theme .certification-card h3 {
        color: #f9fafb;
    }
    
    .dark-theme .skill-category:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .dark-theme .interest-item p,
    .dark-theme .skill-name,
    .dark-theme .project-content p,
    .dark-theme .course-item p,
    .dark-theme .language-item p,
    .dark-theme .soft-skill-item p,
    .dark-theme .certification-card p,
    .dark-theme .course-platform,
    .dark-theme .language-level,
    .dark-theme .language-skills span,
    .dark-theme .cert-issuer,
    .dark-theme .cert-date,
    .dark-theme .cert-valid {
        color: #d1d5db;
    }
    
    .dark-theme .skill-percentage {
        color: #60a5fa;
    }
    
    .dark-theme .tech-tag {
        background: #1e40af;
        color: #dbeafe;
    }
    
    .dark-theme .gpa,
    .dark-theme .thesis,
    .dark-theme .honors {
        background: #1e40af;
        color: #dbeafe;
    }
    
    .dark-theme .course-status.completed {
        background: #065f46;
        color: #d1fae5;
    }
    
    .dark-theme .course-status.in-progress {
        background: #92400e;
        color: #fef3c7;
    }
    
    .dark-theme .cert-badge {
        background: #065f46;
        color: #d1fae5;
    }
    
    .dark-theme .faq-question h3 {
        color: #f9fafb;
    }
    
    .dark-theme .faq-answer {
        color: #d1d5db;
    }
    
    .dark-theme .contact-info h2,
    .dark-theme .contact-info h3,
    .dark-theme .contact-form h2 {
        color: #f9fafb;
    }
    
    .dark-theme .contact-info > p,
    .dark-theme .contact-details p {
        color: #d1d5db;
    }
    
    .dark-theme .contact-details a {
        color: #60a5fa;
    }
    
    .dark-theme .social-contact .social-link {
        color: #d1d5db;
    }
    
    .dark-theme .social-contact .social-link:hover {
        background: #374151;
        color: #60a5fa;
    }
    
    .dark-theme .form-group label {
        color: #f9fafb;
    }
    
    .dark-theme .form-group input,
    .dark-theme .form-group select,
    .dark-theme .form-group textarea {
        background: #374151;
        border-color: #4b5563;
        color: #f9fafb;
    }
    
    .dark-theme .form-group input:focus,
    .dark-theme .form-group select:focus,
    .dark-theme .form-group textarea:focus {
        border-color: #60a5fa;
    }
    
    .dark-theme .form-group select option {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .form-group select option:hover {
        background: #4b5563;
        color: #f9fafb;
    }
    
    .dark-theme .contact-form h2 {
        color: #f9fafb;
    }
    
    .dark-theme .stats {
        background: #374151;
    }
    
    .dark-theme .stat-item {
        background: #4b5563;
        color: #f9fafb;
    }
    
    .dark-theme .stat-number {
        color: #60a5fa;
    }
    
    .dark-theme .interests,
    .dark-theme .languages-section,
    .dark-theme .certifications-section {
        background: #1f2937;
    }
    
    .dark-theme .soft-skills {
        background: #1f2937;
    }
    
    .dark-theme .skills-section {
        background: #1f2937;
    }
    
    .dark-theme .language-item {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .language-item h3 {
        color: #f9fafb;
    }
    
    .dark-theme .language-item p {
        color: #d1d5db;
    }
    
    .dark-theme .language-icon {
        color: #60a5fa;
    }
    
    .dark-theme .project-filters {
        background: #374151;
    }
    
    .dark-theme .filter-btn {
        background: #4b5563;
        border-color: #6b7280;
        color: #d1d5db;
    }
    
    .dark-theme .filter-btn:hover,
    .dark-theme .filter-btn.active {
        border-color: #60a5fa;
        background: #60a5fa;
        color: #ffffff;
    }
    
    .dark-theme .featured-project {
        background: #374151;
    }
    
    .dark-theme .featured-placeholder {
        background: #4b5563;
        color: #fbbf24;
    }
    
    .dark-theme .timeline::before {
        background: #6b7280;
    }
    
    .dark-theme .timeline-marker {
        background: #60a5fa;
    }
    
    /* Mobile Navigation Dark Theme */
    .dark-theme .nav-menu {
        background-color: rgba(31, 41, 55, 0.98);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .dark-theme .nav-menu .nav-item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1rem 0;
    }
    
    .dark-theme .nav-menu .nav-item:last-child {
        border-bottom: none;
    }
    
    .dark-theme .nav-menu .nav-link {
        color: #f9fafb;
        font-size: 1.1rem;
        font-weight: 500;
    }
    
    .dark-theme .nav-menu .nav-link:hover,
    .dark-theme .nav-menu .nav-link.active {
        color: #60a5fa;
    }
    
    .dark-theme .nav-link.active::after {
        background: #60a5fa;
    }
    
    .dark-theme .bar {
        background: #f9fafb;
    }
    
    /* Contact page specific dark theme */
    .dark-theme .contact-section {
        background: #1f2937;
    }
    
    .dark-theme .contact-info {
        background: #374151;
        color: #f9fafb;
    }
    
    .dark-theme .faq-section {
        background: #1f2937;
    }
    
    .dark-theme .page-header {
        background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
    }
    
    /* Navbar Dark Theme */
    .dark-theme .navbar {
        background: rgba(31, 41, 55, 0.95);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .dark-theme .nav-logo a {
        color: #60a5fa;
    }
    
    .dark-theme .nav-logo a:hover {
        color: #93c5fd;
    }
    
    .dark-theme .nav-link {
        color: #f9fafb;
    }
    
    .dark-theme .nav-link:hover,
    .dark-theme .nav-link.active {
        color: #60a5fa;
    }
    
    .dark-theme .theme-toggle {
        background: #60a5fa;
    }
    
    .dark-theme .theme-toggle i {
        color: #1f2937;
    }
`;
document.head.appendChild(darkThemeStyle);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedParallax = debounce(() => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedParallax);

// International Experience Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop around if reaching the end
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel every 4 seconds
function autoAdvanceCarousel() {
    setInterval(() => {
        changeSlide(1);
    }, 4000);
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start auto-advance if carousel exists
    if (slides.length > 0) {
        autoAdvanceCarousel();
    }
});

// Console welcome message
console.log(`
🚀 Portfolio Website Loaded Successfully!

Features:
✅ Responsive Design
✅ Mobile Navigation
✅ Project Filtering
✅ Interactive Skills
✅ Contact Form
✅ FAQ Accordion
✅ Smooth Animations
✅ Dark Theme Toggle

Made with ❤️ using HTML, CSS, and JavaScript
`);
