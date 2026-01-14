// ===========================
// LOADING SCREEN ANIMATION
// ===========================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    if (loadingProgress) {
        loadingProgress.style.width = '100%';
    }
    
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 800);
});

// ===========================
// AOS (ANIMATE ON SCROLL) SIMULATION
// ===========================

const AnimateOnScroll = {
    elements: [],
    
    init: () => {
        AnimateOnScroll.elements = document.querySelectorAll('[data-aos]');
        AnimateOnScroll.observe();
        window.addEventListener('scroll', AnimateOnScroll.check);
        AnimateOnScroll.check();
    },
    
    observe: () => {
        AnimateOnScroll.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = AnimateOnScroll.getTransform(el.getAttribute('data-aos'));
        });
    },
    
    getTransform: (animation) => {
        const transforms = {
            'fade-up': 'translateY(30px)',
            'fade-down': 'translateY(-30px)',
            'fade-left': 'translateX(30px)',
            'fade-right': 'translateX(-30px)',
            'zoom-in': 'scale(0.9)',
            'zoom-out': 'scale(1.1)',
            'flip-left': 'perspective(1000px) rotateY(-20deg)',
            'flip-right': 'perspective(1000px) rotateY(20deg)',
            'flip-up': 'perspective(1000px) rotateX(20deg)'
        };
        return transforms[animation] || 'translateY(30px)';
    },
    
    check: () => {
        AnimateOnScroll.elements.forEach(el => {
            if (AnimateOnScroll.isInViewport(el) && el.style.opacity === '0') {
                const delay = el.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                }, delay);
            }
        });
    },
    
    isInViewport: (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight * 0.85);
    }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', AnimateOnScroll.init);
} else {
    AnimateOnScroll.init();
}

// ===========================
// HEADER SCROLL EFFECT
// ===========================

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'var(--color-bg)';
        } else {
            header.style.boxShadow = 'var(--box-shadow)';
        }
    }
});

// ===========================
// COUNTER ANIMATION
// ===========================

const CounterAnimation = {
    animate: (element, target) => {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    },
    
    init: () => {
        const counters = document.querySelectorAll('[data-count]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.textContent === '0') {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    CounterAnimation.animate(entry.target, target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }
};

CounterAnimation.init();

// ===========================
// PARTICLE EFFECT FOR HERO
// ===========================

const ParticleEffect = {
    init: () => {
        const particles = document.getElementById('particles');
        if (!particles) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particles.appendChild(particle);
        }
    }
};

ParticleEffect.init();

// ===========================
// SCROLL INDICATOR ANIMATION
// ===========================

const ScrollIndicator = {
    init: () => {
        const indicator = document.querySelector('.hero-scroll-indicator');
        if (indicator) {
            indicator.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    indicator.style.opacity = '0';
                    indicator.style.pointerEvents = 'none';
                } else {
                    indicator.style.opacity = '1';
                    indicator.style.pointerEvents = 'all';
                }
            });
        }
    }
};

ScrollIndicator.init();

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const MobileMenu = {
    init: () => {
        const toggle = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('mainNav');
        
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                nav.classList.toggle('active');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                    toggle.classList.remove('active');
                    nav.classList.remove('active');
                }
            });
        }
    }
};

MobileMenu.init();

// ===========================
// PRODUCT CARD HOVER EFFECT
// ===========================

const ProductCardEffect = {
    init: () => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
};

// Re-initialize after products are rendered
window.addEventListener('productsRendered', ProductCardEffect.init);
setTimeout(ProductCardEffect.init, 1000);

// ===========================
// CATEGORY CARD ANIMATIONS
// ===========================

const CategoryCards = {
    init: () => {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.category-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(5deg)';
                }
                const arrow = this.querySelector('.category-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateX(5px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.category-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
                const arrow = this.querySelector('.category-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                }
            });
        });
    }
};

CategoryCards.init();

// ===========================
// BUTTON RIPPLE EFFECT
// ===========================

const RippleEffect = {
    init: () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                this.appendChild(ripple);
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = e.clientX - rect.left - size/2 + 'px';
                ripple.style.top = e.clientY - rect.top - size/2 + 'px';
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
};

RippleEffect.init();

// ===========================
// VIEW TOGGLE (GRID/LIST)
// ===========================

const ViewToggle = {
    init: () => {
        const viewButtons = document.querySelectorAll('.view-btn');
        const productsGrid = document.getElementById('filteredProducts');
        
        viewButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                viewButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const view = this.getAttribute('data-view');
                if (productsGrid) {
                    if (view === 'list') {
                        productsGrid.classList.add('list-view');
                    } else {
                        productsGrid.classList.remove('list-view');
                    }
                }
            });
        });
    }
};

ViewToggle.init();

// ===========================
// FAQ ACCORDION
// ===========================

const FAQAccordion = {
    init: () => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    const wasActive = item.classList.contains('active');
                    
                    // Close all
                    faqItems.forEach(i => {
                        i.classList.remove('active');
                        const toggle = i.querySelector('.faq-toggle');
                        if (toggle) toggle.textContent = '+';
                    });
                    
                    // Open clicked if it wasn't active
                    if (!wasActive) {
                        item.classList.add('active');
                        const toggle = item.querySelector('.faq-toggle');
                        if (toggle) toggle.textContent = '−';
                    }
                });
            }
        });
    }
};

FAQAccordion.init();

// ===========================
// FORM SUBMISSION ANIMATION
// ===========================

const FormSubmit = {
    init: () => {
        const form = document.getElementById('contactForm');
        const success = document.getElementById('formSuccess');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                form.style.opacity = '0';
                form.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    form.style.display = 'none';
                    if (success) {
                        success.style.display = 'block';
                        setTimeout(() => {
                            success.style.opacity = '1';
                            success.style.transform = 'scale(1)';
                        }, 50);
                    }
                }, 300);
            });
        }
    }
};

FormSubmit.init();

// ===========================
// NEWSLETTER FORM ANIMATION
// ===========================

const NewsletterForm = {
    init: () => {
        const forms = document.querySelectorAll('.newsletter-form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const button = form.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = '✓ Subscribed!';
                button.style.backgroundColor = 'var(--color-success)';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.backgroundColor = '';
                    form.reset();
                }, 3000);
            });
        });
    }
};

NewsletterForm.init();

// ===========================
// PARALLAX EFFECT
// ===========================

const ParallaxEffect = {
    init: () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-home, .page-hero');
            
            parallaxElements.forEach(el => {
                el.style.transform = `translateY(${scrolled * 0.5}px)`;
            });
        });
    }
};

ParallaxEffect.init();

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===========================
// PAGE TRANSITION EFFECT
// ===========================

const PageTransition = {
    init: () => {
        const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.hostname === window.location.hostname) {
                    e.preventDefault();
                    const href = this.href;
                    document.body.style.opacity = '0';
                    document.body.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            });
        });
    }
};

PageTransition.init();

// ===========================
// BACK TO TOP BUTTON
// ===========================

const BackToTop = {
    init: () => {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

BackToTop.init();

console.log('🎨 Advanced animations loaded successfully!');
