// ===================================
// NAVIGATION
// ===================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Scroll effect for navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// PROJECTS DATA & RENDERING
// ===================================

const projectsData = [
    {
        title: "Learn@RP Redesign",
        category: "Mobile UX/UI Design",
        type: "design",
        description: "A gamified mobile learning experience reworking the traditional PBL cycle into engaging daily quests.",
        longDescription: "Learn@RP is a high-fidelity mobile redesign aimed at transforming the student learning experience at Republic Polytechnic. By reimagining the traditional Problem-Based Learning (PBL) cycle as a gamified microlearning journey, it helps students master complex technical modules through achievable \"Daily Quests\" and interactive blocks.<br><br>Key innovations include the \"Ignite\" Achievement system—a dynamic fire emote that reacts to progress—and logic-gated learning paths built with Figma variables. The interface features a professional tech-themed design system with smart navigation and dark mode support, explicitly tailored for the RP term structure.<br><br><strong>Technology Stack & Tools</strong><br>• <strong>Design & Prototyping:</strong> Figma (Advanced Variables, Conditionals, Component Properties).<br>• <strong>Visual Design:</strong> UI/UX Heuristics, Vector Tracing, and High-Fidelity Design Systems.<br>• <strong>Domain Context:</strong> Microlearning, Gamification, and Problem-Based Learning (PBL) workflows.",
        features: [
            "Gamified PBL Daily Quests with 'Ignite' Visual Feedback",
            "Logic-Gated Progress & Interactive Lesson Blocks",
            "Smart Navigation with Preserved Scroll & Skill Badging",
            "Comprehensive Design System with Dark Mode & Micro-interactions"
        ],
        image: "assets/Images/learn-rp/learn-rp-redesign.webp",
        tags: ["Figma", "UI/UX", "Gamification", "Mobile Design"],
        year: "2025",
        duration: "Completed",
        links: {
            live: "https://www.figma.com/design/6qAa0Rls2KUC2JzLCIIO1k/Casey-24045990-Learn-RP-App?node-id=42-72&t=rEUqtQ3srmiXhU9C-1",
            github: "#"
        }
    },
    {
        title: "VR Escape Room",
        category: "Immersive Technologies",
        type: "ar-vr",
        description: "An immersive, four-stage virtual reality escape room designed to test cognitive and spatial problem-solving skills.",
        longDescription: "Step into a fully immersive Virtual Reality escape room experience. This project was developed to push the boundaries of interactive storytelling and spatial puzzle design. Players navigate through four distinct stages, each introducing unique mechanics—from physics-based interactions to logic puzzles. <br><br>The environment was carefully crafted in Unity to ensure performance while maintaining high visual fidelity on VR headsets. The core mechanic relies on natural user interactions (grabbing, throwing, pulling) rather than abstract button presses, increasing the sense of presence.",
        features: [
            "Physically-based interaction system (grabbing, throwing levers)",
            "4 Unique stages with increasing difficulty curves",
            "Spatial audio for immersive environmental cues",
            "Optimized baked lighting for mobile VR performance"
        ],
        video: "https://framerusercontent.com/assets/9y78KCCHcvVpnOA7UVFYIxju5M.mp4",
        image: "assets/Images/vr-escape/vr-escape-room1.webp",
        tags: ["Unity", "C#", "VR", "Game Development"],
        year: "2025",
        duration: "6 weeks",
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        title: "AR Business Card",
        category: "Augmented Reality",
        type: "ar-vr",
        description: "An interactive AR business card that bridges the physical and digital worlds, allowing users to seamlessly connect via social links.",
        longDescription: "This mini-project explores the potential of Augmented Reality for personal branding. By scanning a physical name card, 3D avatars and interactive elements 'pop out' on the digital screen to create a memorable networking experience.<br><br>A key usability feature is the smart QR code system: instead of struggling to scan small codes on the card, the app detects the card and digitally projects and enlarges the QR codes, ensuring reliable and fast connections to social profiles.",
        features: [
            "Real-time Image Target tracking for precise digital overlays",
            "Interactive 3D Avatar and item pop-outs",
            "Smart QR Code enlargement for optimized scanning",
            "Seamless integration of Unity & Image Targets"
        ],
        video: "assets/Images/Vr-name-card/CA1_Recording.mp4",
        image: "assets/Images/Vr-name-card/ImageTargetUsedForCA1.png",
        tags: ["Unity", "Image Targets", "AR", "C#"],
        year: "2025",
        duration: "1-2 Weeks",
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        title: "E-Commerce Web - EcoThread",
        category: "UI/UX Design",
        type: "design",
        description: "A complete sustainability e-commerce website flow. Enables customers to browse, purchase items, and proceed through a streamlined checkout process.",
        longDescription: "This high-fidelity Figma prototype outlines the comprehensive user experience for a mobile e-commerce fashion website, focusing on both transactional efficiency and brand narrative. The design encompasses a complete shopping flow, including a main Home Page for product discovery, a Products Page for browsing, detailed Product Details Pages for selection, and a streamlined Cart Page leading to the Order Details Pop-up for checkout confirmation.<br><br>Furthermore, a dedicated \"Our Story Page\" is included to build brand identity by detailing company values and commitments, while a \"Welcome to the Community\" Pop-up on the home page focuses on lead generation. Overall, the prototype is production-ready, featuring realistic visuals, typography, and clear layouts across all stages of the customer journey.",
        features: [
            "Complete User Flow: Discovery -> Selection -> Checkout -> Confirmation",
            "Dedicated Brand Narrative pages to build customer trust",
            "Lead generation integration via community pop-ups",
            "Production-ready UI with realistic visuals and typography"
        ],
        video: "https://framerusercontent.com/assets/USTNN1Hp9bLtKyDyUmXSjkb5QI.mp4",
        image: "assets/Images/Ecothread/ecothread-home.webp",
        tags: ["Figma", "UI/UX", "E-Commerce"],
        year: "2024",
        duration: "3 weeks",
        links: {
            live: "https://www.figma.com/design/Acaa9IYAdgwKEPllXb9ZPd/E-Commerce-web-EcoThread?node-id=0-1&t=51Lq9a0THYDiTx3w-1",
            github: "#"
        }
    },
    {
        title: "Mobile Task Manager",
        category: "Mobile Development",
        type: "mobile-app",
        description: "Capture tasks, categorize, and organize with powerful features. Visualize productivity on a dashboard with precise progress tracking.",
        longDescription: "This project involved the development of a full-stack Task List Manager application designed to boost user productivity through a seamless and organized platform. The application provides essential CRUD (Create, Read, Update, Delete) functionality for managing tasks, complete with features such as prioritization, status tracking, and date assignment.<br><br>Technically, it leverages modern frontend technology for a dynamic UI and secure data persistence, successfully demonstrating proficiency in building a complete, authenticated, and responsive task management solution.",
        features: [
            "Full CRUD functionality (Create, Read, Update, Delete)",
            "Task prioritization and status tracking system",
            "Date assignment and deadline management",
            "Secure authentication and data persistence"
        ],
        video: "https://framerusercontent.com/assets/Ohj4X8JRNPQzo8nwTP3YaZDcAY.mp4",
        image: "assets/Images/task-manager/task-manager-dashboard.webp",
        tags: ["Mobile App", "UI/UX", "Productivity"],
        year: "2024",
        duration: "2 weeks",
        links: {
            live: "#",
            github: "#"
        }
    },
    {
        title: "SG Green Plan",
        category: "Mobile Application",
        type: "mobile-app",
        description: "A team-developed mobile app for managing recycling points in Singapore, featuring secure role-based access and activity tracking.",
        longDescription: "SG Green Plan is a mobile solution supporting Singapore's sustainability initiative by connecting users with recycling infrastructure. Users can locate drop-off points, verify accepted materials, and log their eco-friendly contributions.<br><br><strong>My Role: Backend & Auth Developer</strong><br>I architected the entire backend ecosystem for this team project. My key contributions included designing the RESTful API to handle complex data relationships (Points, Logs, Users), managing the database, and implementing secure JWT-based authentication. I also built the full-stack logic for user registration and login, ensuring a secure and seamless experience for both general users and administrators.",
        features: [
            "Secure JWT Authentication (User & Admin Roles)",
            "Real-time Recycling Point Status & Management",
            "Personal Activity Logging & History View",
            "Comprehensive REST API with Render Deployment"
        ],
        image: "assets/Images/sg-green-plan/home.gif",
        tags: ["Mobile App", "Express.js", "Navigation", "CRUD"],
        year: "2025",
        duration: "2 Weeks",
        links: {
            live: "#",
            github: "https://github.com/C346-AY2025-002/c346-ca2-ca2_team10",
            github_server: "https://github.com/24045990CaseyRP/sg_green_plan_server"
        }
    },
    {
        title: "Campus Pulse",
        category: "Full Stack Web App",
        type: "web-app",
        description: "A secure React web application featuring robust CRUD operations, role-based authentication, and efficient media handling.",
        longDescription: "Campus Pulse is a full-stack web solution designed to streamline digital asset management. Built with a React frontend and a powerful Express/SQL backend, it delivers a secure environment for users to create, read, update, and delete authorized content.<br><br>The system implements industry-standard security measures including JWT-based authentication and protected routes. It efficiently handles complex data interactions through a RESTful API, supporting media uploads via Multer with automatic compression. The seamless integration with a cloud-hosted Render database and Vercel deployment ensures high availability and performance.",
        features: [
            "Protected Routes with JWT Authentication & Authorization",
            "Full CRUD implementation with Express & SQL Backend",
            "Advanced Media Handling (Multer & Image Compression)",
            "Secure CORS configuration & Render DB Integration"
        ],
        image: "assets/Images/campus-pulse/home.gif",
        tags: ["React", "Node.js", "SQL", "Full Stack"],
        year: "2025",
        duration: "2 Weeks",
        links: {
            live: "https://campus-pulse-plum.vercel.app/login",
            github: "https://github.com/24045990CaseyRP/campus-pulse",
            github_server: "https://github.com/24045990CaseyRP/campus-pulse_server"
        }
    },
    {
        title: "Programming Fundamentals",
        category: "Web Development",
        type: "web-app",
        description: "A curated personal showcase demonstrating the transition from foundational scripting to building modern web interfaces.",
        longDescription: "This project represents the foundation of my journey into Full-Stack Development. It is a curated personal showcase designed to demonstrate my transition from foundational scripting to building modern, user-centric web interfaces. <br><br>Rather than a basic \"homework\" page, I have focused on implementing a Modern Minimalist UI using professional development standards. This project serves as a live sandbox where I document my progress in mastering the core pillars of the web: HTML5, CSS3, and JavaScript.",
        features: [
            "Modern Minimalist UI implementation",
            "Live sandbox for documenting developer progress",
            "Demonstration of core web pillars (HTML5, CSS3, JS)",
            "User-centric interface design standards"
        ],
        image: "assets/Images/programming/programming-home.webp",
        tags: ["HTML5", "CSS3", "JavaScript"],
        year: "2025",
        duration: "2 days",
        links: {
            live: "https://learning-web-development-six.vercel.app/",
            github: "https://github.com/24045990CaseyRP/learning-web-development"
        }
    }
];

// Function to create project card HTML
function createProjectCard(project, index) {
    // ... existing SVG code logic ...
    const imageHtml = project.image
        ? `<img src="${project.image}" alt="${project.title}" class="project-image">`
        : `<div class="project-image" style="background: linear-gradient(135deg, #333 0%, #111 100%);"></div>`;

    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    // Modified to include data-index for click handling
    return `
        <div class="project-card" data-index="${index}" onclick="openProjectModal(${index})">
            ${imageHtml}
            <div class="project-content">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <span>📅 ${project.year}</span>
                    <span>⏱️ ${project.duration}</span>
                </div>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <!-- Links removed from card to prevent double click issues, moving them to modal mostly -->
                <div class="project-links">
                     <span class="project-link" style="width:100%; text-align:center;">View Details &rarr;</span>
                </div>
            </div>
        </div>
    `;
}

// Function to load and render projects
async function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    try {
        const projects = projectsData.filter(project =>
            filter === 'all' || project.type === filter
        );

        // Clear grid with fade out effect could be nice but keeping it simple for now
        projectsGrid.innerHTML = '';

        if (projects.length === 0) {
            projectsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--color-text-secondary);">No projects found in this category.</div>';
            return;
        }

        projects.forEach((project, index) => {
            // Use original index for modal mapping
            const originalIndex = projectsData.indexOf(project);
            const projectCard = createProjectCard(project, originalIndex);
            projectsGrid.innerHTML += projectCard;

            // Add stagger animation using the current display index
            setTimeout(() => {
                const cards = document.querySelectorAll('.project-card');
                // We need to target the card we just added. 
                // Since we append, it should be the last one, or we can select by data-index but that is original index.
                // However, querySelectorAll returns all existing cards.
                // The newly added card is at index 'index' of the CURRENT filtered list in the DOM.
                if (cards[index]) {
                    cards[index].style.opacity = '0';
                    cards[index].style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        cards[index].style.transition = 'all 0.6s ease';
                        cards[index].style.opacity = '1';
                        cards[index].style.transform = 'translateY(0)';
                    }, 50);
                }
            }, index * 100);
        });

    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// ===================================
// PROJECT MODAL LOGIC
// ===================================

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Global open function (called by inline onclick)
window.openProjectModal = function (index) {
    const project = projectsData[index];
    if (!project) return;

    // Build Modal HTML
    const tagsHtml = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

    // Generate Links HTML
    let linksHtml = '';
    if (project.links.live && project.links.live !== '#') {
        linksHtml += `<a href="${project.links.live}" target="_blank" class="modal-btn modal-btn-primary">Live Demo ↗</a>`;
    }
    if (project.links.github && project.links.github !== '#') {
        linksHtml += `<a href="${project.links.github}" target="_blank" class="modal-btn modal-btn-secondary">Client Repo ⌨</a>`;
    }
    if (project.links.github_server) {
        linksHtml += `<a href="${project.links.github_server}" target="_blank" class="modal-btn modal-btn-secondary">Server Repo ⌨</a>`;
    }

    // Generate Features List
    const featuresHtml = project.features
        ? `<ul class="feature-list">${project.features.map(f => `<li class="feature-item">${f}</li>`).join('')}</ul>`
        : '';

    // Determine whether to show video or image
    const heroMedia = project.video
        ? `<video src="${project.video}" class="modal-image" autoplay muted loop playsinline></video>`
        : `<img src="${project.image}" alt="${project.title}" class="modal-image">`;

    const content = `
        <div class="modal-hero">
            ${heroMedia}
        </div>
        
        <div class="modal-header-content">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-subtitle">${project.category}</div>
        </div>

        <div class="modal-details">
            <div class="details-main">
                <div class="modal-section-title">Overview</div>
                <p class="modal-description">${project.longDescription || project.description}</p>
                
                ${featuresHtml ? `<div class="modal-section-title">Key Features</div>${featuresHtml}` : ''}
            </div>

            <div class="details-sidebar">
                <div class="modal-meta-grid">
                    <div class="meta-item">
                        <h4>Timeline</h4>
                        <div>${project.year} (${project.duration})</div>
                    </div>
                    <div class="meta-item">
                        <h4>Technologies</h4>
                        <div class="meta-tags">
                            ${tagsHtml}
                        </div>
                    </div>
                    ${linksHtml ? `<div class="modal-links">${linksHtml}</div>` : ''}
                </div>
            </div>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

// Close Modal Logic
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
    // Clear content after transition for performance (optional, usually better to keep for cache but clearing prevents flickers)
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close on outside click
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    // Filter Buttons Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const filterValue = btn.getAttribute('data-filter');
            loadProjects(filterValue);
        });
    });
});

// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = `
        <div class="spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>
        Sending...
    `;
    submitBtn.disabled = true;

    try {
        // Send form data to Formspree
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show success message
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M16.667 5L7.5 14.167L3.333 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Message Sent!
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #8b8b8b 0%, #ffffff 100%)';
            submitBtn.style.color = '#000000';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }

    } catch (error) {
        console.error('Error submitting form:', error);

        // Show error message
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <circle cx="10" cy="10" r="7" stroke-width="2"/>
                <path d="M10 6v4M10 13h.01" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Error! Try Again
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #ff5f56 0%, #e63946 100%)';

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// ===================================
// CURSOR EFFECT (Optional Enhancement)
// ===================================

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--gradient-primary);
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.15s ease;
    mix-blend-mode: difference;
`;
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '0.5';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Smooth cursor follow
function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.1;
    cursorY += dy * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Image interaction effects (if any) could go here


// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #7c3aed;');
console.log('%cLooking at the code? I like your style! 🚀', 'font-size: 16px; color: #06b6d4;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #10b981;');
console.log('%c📧 Pek.casey@gmail.com', 'font-size: 14px; color: #f59e0b;');

// ===================================
// GSAP HOLOGRAPHIC & METRICS EFFECTS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        const hologramText = document.querySelector('.hologram');
        if (hologramText) {
            const originalText = hologramText.textContent;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%';

            // Scramble effect on hover
            hologramText.addEventListener('mouseenter', () => {
                let iterations = 0;
                const interval = setInterval(() => {
                    hologramText.innerText = hologramText.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iterations) {
                                return originalText[index];
                            }
                            return characters[Math.floor(Math.random() * 26)]
                        })
                        .join("");

                    if (iterations >= originalText.length) {
                        clearInterval(interval);
                    }
                    iterations += 1 / 3;
                }, 30);
            });

            // Hologram constant pulse
            gsap.to(".hologram", {
                textShadow: "0 0 20px var(--color-secondary), 0 0 30px var(--color-accent)",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Add holographic lines
            const container = document.querySelector('.hero-title');
            const overlay = document.createElement('div');
            overlay.className = 'hologram-overlay';
            container.appendChild(overlay);

            for (let i = 0; i < 3; i++) {
                const line = document.createElement('div');
                line.className = 'hologram-line';
                overlay.appendChild(line);

                gsap.fromTo(line,
                    { top: '-10%', opacity: 0 },
                    {
                        top: '110%',
                        opacity: 0.5,
                        duration: 2 + i,
                        repeat: -1,
                        ease: 'none',
                        delay: i * 0.5
                    }
                );
            }

            // Floating Metrics Data
            const heroText = document.querySelector('.hero-text');
            const metricsContainer = document.createElement('div');
            metricsContainer.style.position = 'absolute';
            metricsContainer.style.width = '100%';
            metricsContainer.style.height = '100%';
            metricsContainer.style.top = '0';
            metricsContainer.style.left = '0';
            metricsContainer.style.pointerEvents = 'none';
            metricsContainer.style.zIndex = '1';
            heroText.appendChild(metricsContainer);

            function createMetric() {
                const metric = document.createElement('div');
                metric.className = 'metric-data';
                metric.style.position = 'absolute';
                metric.style.left = Math.random() * 100 + '%';
                metric.style.top = Math.random() * 100 + '%';
                metric.style.fontSize = '0.6rem';
                metric.style.color = 'var(--color-secondary)';
                metric.style.fontFamily = 'monospace';
                metric.style.opacity = '0';
                metric.innerHTML = `> SYST_METRIC_${Math.floor(Math.random() * 1000)}: ${Math.random().toFixed(4)}`;
                metricsContainer.appendChild(metric);

                gsap.to(metric, {
                    y: -40,
                    opacity: 0.6,
                    duration: 3 + Math.random() * 2,
                    ease: 'power1.out',
                    onComplete: () => {
                        metric.remove();
                        createMetric();
                    }
                });
            }

            for (let i = 0; i < 4; i++) {
                setTimeout(createMetric, i * 1000);
            }
        }
    }

    // ===================================
    // GLOBAL BINARY RAIN CANVAS EFFECT
    // ===================================
    const canvas = document.createElement('canvas');
    canvas.id = 'globalCanvas';
    canvas.style.position = 'fixed'; // Covers the whole window
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Behind everything
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let columns = [];
    const fontSize = 14;
    const chars = "10"; // Binary only

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        const columnCount = Math.floor(width / fontSize);
        columns = [];

        // Initialize columns
        for (let i = 0; i < columnCount; i++) {
            columns.push({
                x: i * fontSize,
                y: Math.random() * height,
                // SUPER SLOW SPEED: 0.05
                speed: 0.05 + Math.random() * 0.025,
                opacity: 0.05 + Math.random() * 0.1 // More subtle base opacity
            });
        }
    }

    function draw() {
        // Fade out previous frame to create trails
        // Using Deep Obsidian-like color for the fade to match body bg
        // hsl(220, 15%, 7%) is roughly rgb(15, 17, 21)
        ctx.fillStyle = 'rgba(15, 17, 21, 0.1)';
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px monospace`;

        columns.forEach(col => {
            // Randomly highlight some characters, but fewer than before to save perf
            const isHighlight = Math.random() > 0.995;

            if (isHighlight) {
                ctx.fillStyle = '#ffffff'; // Bright white highlight
                ctx.shadowBlur = 8;        // Slightly reduced glow radius for perf
                ctx.shadowColor = '#ffffff';
            } else {
                ctx.fillStyle = `rgba(180, 200, 220, ${col.opacity})`; // Soft silver/blue-grey
                ctx.shadowBlur = 0;
            }

            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, col.x, col.y);

            col.y += col.speed * fontSize; // Move down

            // Reset when off screen
            if (col.y > height && Math.random() > 0.98) {
                col.y = 0;
            }
        });

        requestAnimationFrame(draw);
    }

    initCanvas();
    draw();

    window.addEventListener('resize', initCanvas);
});
