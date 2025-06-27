document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScrolling();
});

function initializeNavigation() {
    const hamburgerBtn = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const mobileMenu = document.getElementById('navbar-dropdown');
    const dropdownBtn = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');
    
    // Mobile menu toggle
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Dropdown menu handling
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
            dropdownBtn.setAttribute('aria-expanded', !dropdownMenu.classList.contains('hidden'));
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
                dropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) {
                dropdownMenu.classList.add('hidden');
                dropdownBtn.setAttribute('aria-expanded', 'false');
                dropdownBtn.focus();
            }
        });
        
        dropdownMenu.classList.add('left-0', 'w-56');
        dropdownMenu.style.left = '';
        dropdownMenu.style.right = '';
        dropdownMenu.style.width = '';
    
        dropdownMenu.classList.add('hidden');
        dropdownBtn.setAttribute('aria-expanded', 'false');
    }
}

function initializeSmoothScrolling() {
    // Smooth scrolling for anchor links
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
    
    // Parallax scrolling effect
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Update hero background position
        const heroSection = document.querySelector('.hero-bg');
        if (heroSection) {
            heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        
        // Update scroll indicator opacity
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - scrolled / 500);
            scrollIndicator.style.opacity = opacity;
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
}