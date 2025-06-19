document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
    const mobileMenu = document.getElementById('navbar-dropdown');
    const dropdownBtn = document.getElementById('dropdownNavbarLink');
    const dropdownMenu = document.getElementById('dropdownNavbar');
    
    if (hamburgerBtn && mobileMenu) 
    {
        hamburgerBtn.addEventListener('click', function() 
        {
            mobileMenu.classList.toggle('hidden');
            
            const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    if (dropdownBtn && dropdownMenu) 
    {
        dropdownBtn.addEventListener('click', function() 
        {
            dropdownMenu.classList.toggle('hidden');
            
            if (!dropdownMenu.classList.contains('hidden')) 
            {
                const buttonRect = dropdownBtn.getBoundingClientRect();
                
                dropdownMenu.style.position = 'absolute';
                dropdownMenu.style.top = `${buttonRect.bottom}px`;
                dropdownMenu.style.left = `${buttonRect.left}px`;
            }
        });
        
        document.addEventListener('click', function(event) 
        {
            if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) 
            {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
});