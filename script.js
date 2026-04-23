let liList = document.querySelectorAll('.tab'),
    containSection = document.querySelector('.content-tab');

const projects = [
    {
        title: "Weather App (Angular)",
        description: "Aplicación para consultar el clima mediante una API y mostrar datos dinámicos en la interfaz.",
        image: "recursos/images/clima.png",
        tags: ["Frontend", "API", "En desarrollo"],
        tech: ["Angular", "TypeScript", "API REST"],
        links: {
            github: "https://github.com/Cortodem/clima-clon-prueba",
            live: null
        }
    },
    {
        title: "Interactive UI (Three.js)",
        description: "Experiencia interactiva basada en scroll con elementos dinámicos que abren ventanas de contenido.",
        image: "recursos/images/threejs.png",
        tags: ["Frontend", "UI", "En desarrollo"],
        tech: ["JavaScript", "Three.js", "Animaciones"],
        links: {
            github: 'https://github.com/Cortodem/Landing-Threejs-and-IA',
            live: 'https://cortodem.github.io/Landing-Threejs-and-IA/'
        }
    },
    {
        title: "Funcionalidades en foro (Harry Potter Head)",
        description: "Desarrollo de funcionalidades dinámicas conectadas a base de datos: directorio automatizado, sistema de favoritos y cambio de imágenes.",
        image: "recursos/images/harrypotter.png",
        tags: ["Sistema", "Backend", "Producción"],
        tech: ["PHP", "JavaScript", "MySQL"],
        links: {
            github: null,
            live: null
        }
    },
    {
        title: "David Martínez Psicología",
        description: "Web corporativa enfocada en captación de clientes con estructura SEO y optimización de rendimiento.",
        image: "recursos/images/psicologo.png",
        tags: ["Proyecto real", "WordPress"],
        tech: ["WordPress", "HTML", "CSS", "SEO"],
        links: {
            live: "https://davidmartinezpsicologia.com",
            github: null
        }
    },
    {
        title: "Lotería La Torre de Oro",
        description: "Plataforma web orientada a facilitar la compra online con foco en experiencia de usuario y conversión.",
        image: "recursos/images/loteria.png",
        tags: ["Proyecto real", "WordPress"],
        tech: ["WordPress", "HTML", "CSS", "JavaScript"],
        links: {
            live: "https://latorredeoro.com",
            github: null
        }
    },
    {
        title: "Papel Pintado Flores",
        description: "Web de afiliación enfocada en posicionamiento SEO y monetización mediante productos de Amazon.",
        image: "recursos/images/papelpintadoflores.png",
        tags: ["SEO", "Afiliación", "Offline"],
        tech: ["WordPress", "HTML", "CSS", "SEO"],
        links: {
            live: null,
            github: null
        }
    },
    {
        title: "Expense Tracker con OCR",
        description: "Aplicación para gestionar gastos mediante escaneo de tickets y extracción automática de datos.",
        image: "recursos/images/expense.png",
        tags: ["Idea", "Producto", "Fase inicial"],
        tech: ["OCR", "IA", "Procesamiento de datos"],
        links: {
            live: null,
            github: null
        }
    }
];

printTabsProjects(projects);
printProject(projects[0]);
liList[0].classList.add('selected');

liList.forEach((tab, index) => tab.addEventListener('click', () => {

    liList.forEach(otherTab => otherTab.classList.remove('selected'));
    tab.classList.toggle('selected');

    switch (index) {
        case 0:
            printProject(projects[0]);
            break;
        case 1:
            printProject(projects[1]);
            break;
        case 2:
            printProject(projects[2]);;
            break;
        case 3:
            printProject(projects[3]);
            break;
        case 4:
            printProject(projects[4]);
            break;
        case 5:
            printProject(projects[5]);
            break;
        case 6:
            printProject(projects[6]);
            break;
    }
}));

function printTabsProjects(projects) {
    const tabList = document.querySelector('.list-tab');

    tabList.innerHTML = '';

    projects.forEach(project => {
        tabList.innerHTML += `<li class="tab">${project.title}</li>`
    });
    liList = document.querySelectorAll('.tab');
}

function printProject(project) {
    const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
    const techHTML = project.tech.join(" · ");

    const linksHTML = `
      ${project.links?.live ? `<a href="${project.links.live}" target="_blank">Ver web</a>` : ""}
      ${project.links?.github ? `<a href="${project.links.github}" target="_blank">GitHub</a>` : ""}
    `;

    const projectHTML = `
      <article class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-text">
        
            <h3>${project.title}</h3>
            <div class="tags">
            ${tagsHTML}
            </div>
            <p>${project.description}</p>
            <p class="tech">${techHTML}</p>

            <div class="links">
                ${linksHTML}
            </div>
        </div>
      </article>`;

    containSection.innerHTML = projectHTML;
}