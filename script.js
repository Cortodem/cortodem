let liList = document.querySelectorAll('.tab'),
    containSection = document.querySelector('.content-tab');

const projects = [
    {
        title: "MeteStats App (Angular)",
        description: "Aplicación que, a través de consultar el clima mediante una API, recomienda qué vestimenta es la más adecuada.",
        image: "recursos/images/clima.webp",
        tags: ["Frontend", "API", "En desarrollo"],
        tech: ["Angular", "TypeScript", "TailwindCSS"],
        links: {
            github: "https://github.com/Cortodem/clima-clon-prueba",
            live: null
        }
    },
    {
        title: "Interactive UI (Three.js)",
        description: "Experiencia interactiva basada en scroll con elementos dinámicos que abren ventanas de contenido.",
        image: "recursos/images/threejs.webp",
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
        image: "recursos/images/harrypotter.webp",
        tags: ["Sistema", "Frontend", "Backend", "Producción"],
        tech: ["PHP", "JavaScript", "MySQL", "Three.js"],
        links: {
            github: null,
            live: 'https://harrypotterhead.com/foro/pages/Directorio.php'
        }
    },
    {
        title: "David Martínez Psicología",
        description: "Web profesional enfocada en captación de clientes con estructura SEO y optimización de rendimiento.",
        image: "recursos/images/psicologo.webp",
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
        image: "recursos/images/loteria.webp",
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
        image: "recursos/images/papelpintadoflores.webp",
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
      ${project.links?.live ? `<a class="button-link" href="${project.links.live}" target="_blank" rel="noopener noreferrer"><span>Ver web</span><svg preserveAspectRatio="xMidYMid" viewBox="0 0 190.5 190.5"><path fill="none" d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z"/><path fill="currentColor" d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z"/><path fill="currentColor" d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z"/><path fill="currentColor" d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z"/><path fill="currentColor" d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z"/></svg></a>` : ""}
      ${project.links?.github ? `<a class="button-link" href="${project.links.github}" target="_blank" rel="noopener noreferrer"><span>GitHub</span><svg viewBox="0 0 1024 1024" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clip-rule="evenodd"/></svg></a>` : ""}
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

///////////////////////////////
/* Cambiar tema claro-oscuro */
///////////////////////////////
const themeBtn = document.getElementById('theme-toggle');

themeBtn.setAttribute('aria-pressed', document.documentElement.dataset.theme === 'dark');
themeBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.dataset.theme;
    console.log('Tema actual: ' + currentTheme);

    if (currentTheme === 'dark') {
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');

    }else if (currentTheme === 'light') {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');

    }
    themeBtn.setAttribute('aria-pressed', currentTheme != 'dark');
});