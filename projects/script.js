document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu");
    const navbar = document.querySelector(".navbar");
    const scrollTop = document.querySelector("#scroll-top");

    menu?.addEventListener("click", () => {
        menu.classList.toggle("fa-times");
        navbar?.classList.toggle("nav-toggle");
    });

    window.addEventListener("scroll", () => {
        menu?.classList.remove("fa-times");
        navbar?.classList.remove("nav-toggle");
        scrollTop?.classList.toggle("active", window.scrollY > 60);
    });
});

document.addEventListener("visibilitychange", () => {
    const favicon = document.querySelector("#favicon");
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Dev Juneja";
        favicon?.setAttribute("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        favicon?.setAttribute("href", "/assets/images/favhand.png");
    }
});

function getProjects() {
    return fetch("projects.json?v=dev-portfolio-2", { cache: "no-store" }).then(response => response.json());
}

function showProjects(projects) {
    const projectsContainer = document.querySelector(".work .box-container");
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
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
            </div>
        </div>`).join("");

    const filterButtons = document.querySelectorAll(".button-group .btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(item => item.classList.remove("is-checked"));
            button.classList.add("is-checked");

            const filter = button.dataset.filter;
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.display = filter === "*" || item.matches(filter) ? "" : "none";
            });
        });
    });

    if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 20 });
    }
}

getProjects().then(showProjects).catch(error => console.error("Failed to load projects", error));
