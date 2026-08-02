document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
    const navbar = document.querySelector(".navbar");
    const scrollTop = document.querySelector("#scroll-top");

    menu?.addEventListener("click", () => {
        menu.classList.toggle("fa-times");
        navbar?.classList.toggle("nav-toggle");
    });

    const handleScroll = () => {
        menu?.classList.remove("fa-times");
        navbar?.classList.remove("nav-toggle");

        scrollTop?.classList.toggle("active", window.scrollY > 60);

        document.querySelectorAll("section[id]").forEach(section => {
            const offset = section.offsetTop - 200;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (window.scrollY > offset && window.scrollY < offset + height) {
                document.querySelectorAll(".navbar ul li a").forEach(link => link.classList.remove("active"));
                document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", event => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelector("#contact-form")?.addEventListener("submit", event => {
        event.preventDefault();
        if (!window.emailjs) {
            alert("Email service is not configured yet. Please email me directly at devjuneja789@gmail.com.");
            return;
        }

        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
        emailjs.sendForm("contact_service", "template_contact", "#contact-form")
            .then(() => {
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            })
            .catch(() => {
                alert("Form Submission Failed! Try Again");
            });
    });
});

document.addEventListener("visibilitychange", () => {
    const favicon = document.querySelector("#favicon");
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Dev Juneja";
        favicon?.setAttribute("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        favicon?.setAttribute("href", "assets/images/favhand.png");
    }
});

if (window.Typed) {
    new Typed(".typing-text", {
        strings: ["AI/ML development", "full-stack development", "RAG systems", "NLP pipelines", "LLM experiments"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
} else {
    const typingText = document.querySelector(".typing-text");
    if (typingText) typingText.textContent = "AI/ML development";
}

async function fetchData(type = "skills") {
    const url = type === "skills" ? "skills.json?v=dev-portfolio-2" : "./projects/projects.json?v=dev-portfolio-2";
    const response = await fetch(url, { cache: "no-store" });
    return response.json();
}

function showSkills(skills) {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skills.map(skill => `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" />
                <span>${skill.name}</span>
            </div>
        </div>`).join("");
}

function showProjects(projects) {
    const projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.slice(0, 10).map(project => `
        <div class="box tilt">
            <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name}" />
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                        <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>
        </div>`).join("");

    if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });
    }
}

fetchData().then(showSkills).catch(error => console.error("Failed to load skills", error));
fetchData("projects").then(showProjects).catch(error => console.error("Failed to load projects", error));

if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });
}

if (window.ScrollReveal) {
    const srtop = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 1000,
        reset: true
    });

    srtop.reveal(".home .content h3", { delay: 200 });
    srtop.reveal(".home .content p", { delay: 200 });
    srtop.reveal(".home .content .btn", { delay: 200 });
    srtop.reveal(".home .image", { delay: 400 });
    srtop.reveal(".home .linkedin", { interval: 600 });
    srtop.reveal(".home .github", { interval: 800 });
    srtop.reveal(".home .dev", { interval: 600 });
    srtop.reveal(".about .content h3", { delay: 200 });
    srtop.reveal(".about .content .tag", { delay: 200 });
    srtop.reveal(".about .content p", { delay: 200 });
    srtop.reveal(".about .content .box-container", { delay: 200 });
    srtop.reveal(".about .content .resumebtn", { delay: 200 });
    srtop.reveal(".skills .container", { interval: 200 });
    srtop.reveal(".skills .container .bar", { delay: 400 });
    srtop.reveal(".education .box", { interval: 200 });
    srtop.reveal(".work .box", { interval: 200 });
    srtop.reveal(".experience .timeline", { delay: 400 });
    srtop.reveal(".experience .timeline .container", { interval: 400 });
    srtop.reveal(".contact .container", { delay: 400 });
    srtop.reveal(".contact .container .form-group", { delay: 400 });
}
