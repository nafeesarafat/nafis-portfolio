// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Advanced Interactive Navbar JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar elements
    const navbar = document.querySelector('.navbar-custom');
    const navLinks = document.querySelectorAll('.animated-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Set active link based on current page
    setActiveLink();

    // Scroll-based navbar changes
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu when clicking a link
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover sound effect (visual feedback)
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });

        link.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    // Mobile menu improvements
    const navbarToggler = document.querySelector('.custom-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }

    // Add loading animation for page transitions
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('active')) {
                // Add loading state
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.animation = 'spin 1s linear infinite';
                }
            }
        });
    });

    // Function to set active link based on current URL
    function setActiveLink() {
        const currentPath = window.location.pathname;
        const currentAction = getActionFromPath(currentPath);

        navLinks.forEach(link => {
            const linkAction = link.getAttribute('asp-action');
            if (linkAction === currentAction) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Helper function to extract action from path
    function getActionFromPath(path) {
        if (path === '/' || path === '') return 'Index';
        const segments = path.split('/').filter(s => s);
        if (segments.length === 0) return 'Index';
        return segments[segments.length - 1] || 'Index';
    }

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .navbar-custom {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animated-link {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe navbar for animations
    if (navbar) {
        observer.observe(navbar);
    }
});

// Add smooth scrolling for anchor links
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
