// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    themeToggle.querySelector('i').classList.remove('fa-moon');
    themeToggle.querySelector('i').classList.add('fa-sun');
} else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    themeToggle.querySelector('i').classList.remove('fa-sun');
    themeToggle.querySelector('i').classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.querySelector('i').classList.remove('fa-sun');
        themeToggle.querySelector('i').classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#download') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Scroll Animations (AOS-like)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Animated Waveform
// ========================================
const micButton = document.querySelector('.key-mic');
const waveform = document.querySelector('.waveform');

if (micButton && waveform) {
    // Continuous animation for waveform
    const waveBars = waveform.querySelectorAll('.wave-bar');
    
    // Add hover effect
    micButton.addEventListener('mouseenter', () => {
        micButton.style.transform = 'scale(1.1)';
        waveform.style.opacity = '1';
    });
    
    micButton.addEventListener('mouseleave', () => {
        micButton.style.transform = 'scale(1)';
        waveform.style.opacity = '0.6';
    });
    
    // Click effect
    micButton.addEventListener('click', () => {
        micButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            micButton.style.transform = 'scale(1.1)';
        }, 150);
    });
}

// ========================================
// Button Ripple Effect
// ========================================
document.querySelectorAll('.btn-ripple').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn-ripple {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// Parallax Effect for Hero Background
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Keyboard Mockup Interactive Effects
// ========================================
const keys = document.querySelectorAll('.keyboard-mockup .key:not(.key-mic)');
let keyPressTimeout;

keys.forEach(key => {
    key.addEventListener('mouseenter', () => {
        clearTimeout(keyPressTimeout);
        key.style.transform = 'translateY(-2px) scale(1.05)';
        key.style.background = 'var(--primary-light)';
    });
    
    key.addEventListener('mouseleave', () => {
        key.style.transform = 'translateY(0) scale(1)';
        key.style.background = '';
    });
    
    key.addEventListener('mousedown', () => {
        key.style.transform = 'translateY(0) scale(0.95)';
    });
    
    key.addEventListener('mouseup', () => {
        key.style.transform = 'translateY(-2px) scale(1.05)';
    });
});

// ========================================
// Scroll Indicator
// ========================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ========================================
// Performance Optimization: Debounce Scroll Events
// ========================================
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

// Debounced scroll handler for performance
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations are handled in individual scroll listeners
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ========================================
// Feature Cards Hover Animation
// ========================================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ========================================
// Step Cards Animation on Scroll
// ========================================
const stepCards = document.querySelectorAll('.step-card');

const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.5 });

stepCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    stepObserver.observe(card);
});

// ========================================
// Screenshot Cards Hover Effect
// ========================================
const screenshotCards = document.querySelectorAll('.screenshot-card');

screenshotCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// Pricing Card Hover Effect
// ========================================
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const badge = card.querySelector('.pro-badge');
        if (badge) {
            badge.style.transform = 'translateX(-50%) scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const badge = card.querySelector('.pro-badge');
        if (badge) {
            badge.style.transform = 'translateX(-50%) scale(1)';
        }
    });
});

// ========================================
// Privacy Shield Animation
// ========================================
const privacyShield = document.querySelector('.privacy-shield');

if (privacyShield) {
    const shieldObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icon = entry.target.querySelector('i');
                if (icon) {
                    icon.style.animation = 'pulse 2s ease-in-out infinite';
                }
            }
        });
    }, { threshold: 0.5 });
    
    shieldObserver.observe(privacyShield);
}

// ========================================
// Smooth Page Load
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%cAI Keyboard', 'font-size: 24px; font-weight: bold; color: #00C7B7;');
console.log('%cOffline Voice Typing Powered by AI', 'font-size: 14px; color: #8E8E93;');
console.log('%cYour AI. Your models. Your data.', 'font-size: 12px; color: #6E6E73;');
console.log('%cGitHub: https://github.com/muhib-karim/ai-keyboard', 'font-size: 12px; color: #00C7B7;');
