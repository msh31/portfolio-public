const translations = {
    en: {
        heroTitle: "Hi, I'm <span class=\"text-perfectred\">Marco</span>.",
        heroSubtitle: "Software Engineering Student",
        heroDesc: "Student from the Netherlands, passionate about creating solutions and learning new technologies",
        aboutTitle: "About Me",
        about1: "I'm a student based in <span class=\"text-[#f57905] specialcursor2\">the Netherlands</span> where I currently study software development at Alfa-College.",
        about2: "I enjoy creating programs that solve real-world problems. Along the way, I often pick up new skills or programming languages, I like taking a creative approach and always aim to come up with solutions that are logical, efficient, and user-friendly.",
        about3: "Beyond programming, I'm curious about new technology whether it's software or hardware related and I'm always looking for ways to develop myself further.",
        about4: "In my free time I like to work on small side projects to learn new things. If I'm not programming you'll probably find me at the Mystery Box attempting to get a <span class=\"text-[#dd00ff] specialcursor\">wonderweapon</span>.",
        contactTitle: "Get In Touch",
        skillsTitle: "Tech Stack",
        languages: "Languages",
        frameworks: "Frameworks & Styling",
        os: "OS Experience",
        learningTitle: "Currently Learning",
        futureTitle: "Future Goals",
        featuredProjects: "Featured Projects",
        allProjects: "All Projects",
        personal: "Personal",
        school: "School",
        scrollDown: "Scroll down",
        project1Title: "Marco's Casino",
        project1Desc: "Simple blackjack game made for a school assignment with clean UI and basic game mechanics.",
        project2Title: "Math Learning App",
        project2Desc: "A web application that helps people learn the basics of mathematics with interactive exercises.",
        brand: "Marco H.",
        demos: "Demos",
        requestCV: "Request CV",
        langToggle: "NL",
        casino: "Marco's Casino",
        rekensite: "Math Learning App",
        jsLang: "JavaScript • Game",
        bootstrapLang: "Bootstrap • Education",
        liveProjects: "Live Projects",
        footerDesigned: "Designed in",
        footerBuilt: "built with",
        footerIn: "in",
    },
    nl: {
        heroTitle: "Hoi, ik ben <span class=\"text-perfectred\">Marco</span>.",
        heroSubtitle: "Software Engineering Student",
        heroDesc: "Student uit Nederland, gepassioneerd over het maken van oplossingen en het leren van nieuwe technologieën",
        aboutTitle: "Over Mij",
        about1: "Ik ben een student uit <span class=\"text-[#f57905] specialcursor2\">Nederland</span> en studeer software development aan het Alfa-College.",
        about2: "Ik maak graag programma's die echte problemen oplossen. Onderweg leer ik vaak nieuwe vaardigheden of programmeertalen, ik neem graag een creatieve aanpak en streef altijd naar logische, efficiënte en gebruiksvriendelijke oplossingen.",
        about3: "Naast programmeren ben ik nieuwsgierig naar nieuwe technologie, zowel software als hardware, en zoek ik altijd naar manieren om mezelf verder te ontwikkelen.",
        about4: "In mijn vrije tijd werk ik graag aan kleine projecten om nieuwe dingen te leren. Als ik niet programmeer, vind je me waarschijnlijk bij de Mystery Box op zoek naar een <span class=\"text-[#dd00ff] specialcursor\">wonderwapen</span>.",
        contactTitle: "Contact",
        skillsTitle: "Tech Stack",
        languages: "Talen",
        frameworks: "Frameworks & Styling",
        os: "OS Ervaring",
        learningTitle: "Nu aan het leren",
        futureTitle: "Toekomstplannen",
        featuredProjects: "Uitgelichte Projecten",
        allProjects: "Alle Projecten",
        personal: "Persoonlijk",
        school: "School",
        scrollDown: "Scroll naar beneden",
        project1Title: "Marco's Casino",
        project1Desc: "Simpel blackjackspel gemaakt voor een schoolopdracht met een nette UI en basis game-mechanics.",
        project2Title: "Reken App",
        project2Desc: "Een webapplicatie die mensen helpt de basis van wiskunde te leren met interactieve oefeningen.",
        brand: "Marco H.",
        demos: "Demo's",
        requestCV: "CV aanvragen",
        langToggle: "EN",
        casino: "Marco's Casino",
        rekensite: "Reken App",
        jsLang: "JavaScript • Spel",
        bootstrapLang: "Bootstrap • Educatie",
        liveProjects: "Live Projecten",
        footerDesigned: "Ontworpen in",
        footerBuilt: "gebouwd met",
        footerIn: "in",
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang; // Make it globally available
    const t = translations[lang];
    if (!t) return;
    
    // Generic i18n attribute update
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'DIV' || el.tagName === 'A' || el.tagName === 'BUTTON') {
                if (t[key].includes('<span') || t[key].includes('<')) {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        }
    });
    
    const scrollDown = document.querySelector('.scroll-indicator span');
    if (scrollDown) scrollDown.textContent = t.scrollDown;
    
    const toggleLabel = document.getElementById('lang-toggle-label');
    if (toggleLabel) toggleLabel.textContent = lang === 'en' ? 'NL' : 'EN';
    
    const toggleLabelMobile = document.getElementById('lang-toggle-label-mobile');
    if (toggleLabelMobile) toggleLabelMobile.textContent = lang === 'en' ? 'NL' : 'EN';
}

document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setLanguage(currentLang === 'en' ? 'nl' : 'en');
        });
    }
    
    // Set initial language
    setLanguage('en');
});