// portfolio project manager

class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
        this.container = document.getElementById('projectContainer');
        this.filters = document.querySelectorAll('.project-filter');
        
        this.loadProjects();
        this.setupEventListeners();
        this.showProjects();
    }

    loadProjects() {
        this.projects = [
            {
                id: 1,
                title: "Marco's Casino",
                description: "Simple blackjack game made for a school assignment with clean UI and basic game mechanics.",
                image: "assets/img/casino.png",
                category: "school",
                technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
                link: "/casino",
                linkText: "Try Demo",
                linkType: "demo"
            },
            {
                id: 2,
                title: "Arithmetic Web App",
                description: "A web application that helps people learn the basics of mathematics with interactive exercises.",
                image: "assets/img/rekensite.png",
                category: "school",
                technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                link: "/rekenen",
                linkText: "Try Demo",
                linkType: "demo"
            },
            {
                id: 3,
                title: "Sortify",
                description: "A simple and easy-to-use photo sorting application built with modern desktop technologies.",
                image: "assets/img/sortify_preview.gif",
                category: "personal",
                technologies: ["C#", ".NET 9", "AvaloniaUI"],
                link: "https://github.com/msh31/Sortify",
                linkText: "View Project",
                linkType: "github"
            },
            {
                id: 4,
                title: "Caesar Cipher",
                description: "A Caesar cipher encrypt/decrypt CLI tool written in C",
                image: "assets/img/caesar-cipher.png",
                category: "personal",
                technologies: ["C"],
                link: "https://github.com/msh31/caesar-cipher",
                linkText: "View Project",
                linkType: "github"
            },
            {
                id: 5,
                title: "kaprekar's constant",
                description: "An implementation of kaprekar's constant written in Go",
                image: "assets/img/kaprekar.png",
                category: "personal",
                technologies: ["Go"],
                link: "https://github.com/msh31/kaprekars-constant",
                linkText: "View Project",
                linkType: "github"
            },
            {
                id: 6,
                title: "Omanido Security",
                description: "Security-focused enhancements to a PHP-based banking system",
                image: "assets/img/omanido.png",
                category: "school",
                technologies: ["PHP"],
                link: "https://github.com/msh31/omanido-security",
                linkText: "View Project",
                linkType: "github"
            },
            {
                id: 7,
                title: "Rsync Manager (WIP)",
                description: "A modern web-based GUI for managing rsync operations",
                image: "assets/img/soon.png",
                category: "personal",
                technologies: ["Next.JS", "Typescript", "TailwindCSS", "Rsync", "Docker"],
                link: "https://github.com/msh31/rsync-manager",
                linkText: "View Project",
                linkType: "github"
            }
        ];
    }

    setupEventListeners() {
        this.filters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                this.switchFilter(category);
                this.filterBy(category);
            });
        });
    }

    switchFilter(category) {
        this.filters.forEach(filter => filter.classList.remove('active'));
        
        const activeFilter = document.querySelector(`[data-category="${category}"]`);
        if (activeFilter) {
            activeFilter.classList.add('active');
        }
        
        this.currentFilter = category;
    }

    filterBy(category) {
        const filtered = category === 'all' 
            ? this.projects 
            : this.projects.filter(project => project.category === category);
        
        this.container.style.opacity = '0.5';
        this.container.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            this.displayProjects(filtered);
            this.container.style.opacity = '1';
            this.container.style.transform = 'translateY(0)';
        }, 150);
    }

    showProjects() {
        this.displayProjects(this.projects);
    }

    displayProjects(projects) {
        if (projects.length === 0) {
            this.container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="text-graycustom text-lg">
                        <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                        </svg>
                        <p>No projects found for this category.</p>
                    </div>
                </div>
            `;
            return;
        }

        // build html for all projects
        let html = '';
        projects.forEach(project => {
            html += this.buildProjectCard(project);
        });
        
        this.container.innerHTML = html;
        
        // animation for cards
        setTimeout(() => {
            const cards = this.container.querySelectorAll('.project-card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, i * 100);
            });
        }, 50);
    }

    buildProjectCard(project) {
        let techBadges = '';
        if (project.technologies) {
            project.technologies.forEach(tech => {
                techBadges += `<span class="px-2 py-1 bg-perfectred/20 text-perfectred text-xs rounded-full">${tech}</span>`;
            });
        }

        // icon
        const linkIcon = project.linkType === 'github' 
            ? `<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                 <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
               </svg>`
            : `<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
               </svg>`;

        //color
        const badge = project.category === 'school' 
            ? '<span class="absolute top-4 right-4 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">School</span>'
            : '<span class="absolute top-4 right-4 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Personal</span>';

        return `
            <div class="project-card bg-bgaccent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-600/30 relative group" data-category="${project.category}">
                ${badge}
                <div class="h-48 bg-background flex items-center justify-center border-b border-gray-600/20 overflow-hidden">
                    <img class="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110" 
                         src="${project.image}" 
                         alt="${project.title} Preview" 
                         loading="lazy" />
                </div>
                <div class="p-6">
                    <h3 class="text-offwhite text-xl font-bold mb-3">${project.title}</h3>
                    <p class="text-graycustom mb-4 leading-relaxed">${project.description}</p>
                    
                    ${techBadges ? `<div class="flex flex-wrap gap-2 mb-4">${techBadges}</div>` : ''}
                    
                    <a href="${project.link}" ${project.linkType === 'github' ? 'target="_blank"' : ''} 
                       class="inline-flex items-center px-4 py-2 bg-perfectred text-offwhite rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-perfectred focus:ring-opacity-50">
                        ${project.linkText}
                        ${linkIcon}
                    </a>
                </div>
            </div>
        `;
    }
    
    addProject(projectData) {
        const newProject = {
            id: this.projects.length + 1,
            ...projectData
        };
        
        this.projects.push(newProject);
        
        if (this.currentFilter === 'all' || this.currentFilter === newProject.category) {
            this.filterBy(this.currentFilter);
        }
        
        return newProject;
    }

    removeProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
        this.filterBy(this.currentFilter);
    }
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.tech-card, .project-card').forEach(card => {
        observer.observe(card);
    });
}

// parallax effect for hero  
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-bg');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    window.projectManager = new ProjectManager();
    setupScrollAnimations();
    setupParallax();
});