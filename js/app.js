/**
 * Erika Jazly Godoy - CS Portfolio Core Script
 * Handles responsive interactions and dynamic JSON loading.
 */

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    // ==========================================
    // RESPONSIVE NAVIGATION CONTROL
    // ==========================================
    function toggleMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    // Toggle menu drawer open/closed on mobile
    hamburger.addEventListener("click", toggleMenu);

    // Auto-close menu when selection link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // ==========================================
    // DYNAMIC NAVIGATION SCROLL SPY
    // ==========================================
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Evaluates which section is taking up the center of the viewport
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // ==========================================
    // DYNAMIC DATA INTEGRATION (JSON FETCH)
    // ==========================================
    async function loadPortfolioData() {
        try {
            // Fetch data from local JSON file
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`Failed to fetch portfolio data: ${response.status}`);
            }
            const data = await response.json();

            // Run rendering routines
            renderSkills(data.skills);
            renderEducation(data.education);
            renderProjects(data.projects);

        } catch (error) {
            console.error("Error loading JSON dataset: ", error);
        }
    }

    // Generate Skills Tag Elements
    function renderSkills(skills) {
        const skillsContainer = document.getElementById("skills-container");
        if (!skillsContainer) return;

        skillsContainer.innerHTML = `
            <div class="skills-subset">
                <h4 class="skills-subheading">Technical Expertise</h4>
                <div class="skills-list" id="tech-skills"></div>
            </div>
            <div class="skills-subset" style="margin-top: 30px;">
                <h4 class="skills-subheading">Professional Soft Skills</h4>
                <div class="skills-list" id="soft-skills"></div>
            </div>
        `;

        const techContainer = document.getElementById("tech-skills");
        const softContainer = document.getElementById("soft-skills");

        skills.forEach(skill => {
            const skillPill = document.createElement("span");
            skillPill.className = `skill-tag ${skill.category}-tag`;
            skillPill.textContent = skill.name;

            if (skill.category === "technical") {
                techContainer.appendChild(skillPill);
            } else {
                softContainer.appendChild(skillPill);
            }
        });
    }

    // Generate Timeline List Elements
    function renderEducation(education) {
        const eduContainer = document.getElementById("education-timeline");
        if (!eduContainer) return;

        eduContainer.innerHTML = education.map(item => `
            <div class="resume-item">
                <span class="year">${item.year}</span>
                <h4>${item.level}</h4>
                <p class="institution">${item.institution}</p>
                ${item.details ? `<p>${item.details}</p>` : ''}
            </div>
        `).join('');
    }

    // Generate Clickable Project Cards with Images
    function renderProjects(projects) {
        const projectsContainer = document.getElementById("projects-container");
        if (!projectsContainer) return;

        projectsContainer.innerHTML = projects.map(project => `
            <a href="${project.link}" target="_blank" class="project-card-link">
                <div class="project-card">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title} Preview" class="project-img" onerror="this.src='https://placehold.co/600x400?text=${encodeURIComponent(project.title)}'">
                    </div>
                    <div class="project-card-content">
                        <h4>${project.title} <i class="fa-solid fa-arrow-up-right-from-square link-arrow"></i></h4>
                        <p>${project.description}</p>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // Trigger local retrieval process
    loadPortfolioData();
});