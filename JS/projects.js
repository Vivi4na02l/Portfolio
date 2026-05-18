let projects = [];
let projectsClosed = [];
let projectsList;
let pageOnDisplay = 1, firstProject, lastProject;

async function loadProjects() {
    const response = await fetch("./data/projects.json");
    projects = await response.json();

    projectsList = projects
    console.log(projects);
}

function cardList() {
    let projectTotalPages = Math.ceil(projects.length/6); // counts how many pages are needed depending on the total of projects (only 6 project cards per page)
    firstProject = (pageOnDisplay - 1) * 6;
    lastProject = firstProject + 6;

    let projectsPerPage = projectsList.filter((project, i) => {
        return i >= firstProject && i < lastProject
    })

    let projectsHtml = ''

    for (const project of projectsPerPage) {
        // if (i >= firstProject && i < lastProject) {
            projectsHtml += `
                <div class="animHigher projectCard">
                    <article class="project">
                        <!-- header -->
                        <header>
                            <div>
                                <img src="${project.logo}"
                                    alt='${project.logo_alt}'>
                                <h3>${project.title}</h3>
                            </div>
                            
                            <div>
                                <button class="headerBtn minimizeBtn" onclick="closeCard('${project.title}')">&#8211;</button>
                                <button class="headerBtn fullscreenBtn" onclick="projectDetails('${project.title}')">&#9723;</button>
                                <button class="closeBtn" onclick="closeCard('${project.title}')">✕</button>
                            </div>
                        </header>

                        <!-- body -->
                        <div class="body">
                            <img src="${project.img}"
                                alt='${project.alt}'
                                class="projectImg">

                            <p class="description">${project.description}</p>

                            <span class="projectTech">`

            for (const projectTech of project.tech) {
                if (!projectTech.img) {
                projectsHtml += `
                        <figure>
                            <figcaption>${projectTech.name}</figcaption>
                        </figure>
                    ` 
                } else {
                    projectsHtml += `
                        <figure>
                            <img src="${projectTech.img}"
                                alt="${projectTech.alt} ">
                            <figcaption>${projectTech.name}</figcaption>
                        </figure>
                    `
                }
            }
            
            projectsHtml += `
                            </span>
                        </div>

                        <!-- footer -->
                        <footer>
                            <a target="_blank" href="${project.demo}" class="lDemo">Live demo</a>
                            <a target="_blank" class="cStudy" onclick="projectDetails('${project.title}')">Case study</a>
                            <a target="_blank" href="${project.github}" class="github">Github</a>
                        </footer>
                    </article>
                </div>
            `
        }

        if (projectsClosed.length != 0) {
            projectsHtml += `<div class="iconProjectsClosed">`

            for (const project of projectsClosed) {
                projectsHtml += `
                    <figure onclick="reAddCard('${project.title}')" class="iconProjectClosed">
                        <span>
                            <img src="${project.logo}" width="100%">
                            <figcaption class="pWhite karla">${project.title}</figcaption>
                        </span>
                    </figure>
                `
            }

            projectsHtml += `</div>`
        // }
    }

    document.querySelector("#projects").innerHTML = projectsHtml;
}

for (const button of document.querySelectorAll(".btnPage")) {
    button.addEventListener('click', (e) => {
        document.querySelector("#projectsTitle").scrollIntoView({
            behavior: "smooth"
        })
        
        for (const btn of document.querySelectorAll(".btnPage")) {
            btn.classList.remove("active");
            btn.classList.add("inactive");
        }

        e.target.classList.remove("inactive");
        e.target.classList.add("active");

        pageOnDisplay = parseInt(e.target.innerHTML);
        cardList();
    })
}

/**
 * after clicking on the minimize or close button, the card of that project disappears and a floating icon associated to it appears on the last cell of the grid
 * @param {*} projectTitle 
 */
function closeCard(projectTitle) {
    // adds an icon of the project to the first grid of the display grid to be able to open the card again
    let projectIndex = projectsList.findIndex(projectCard => projectCard.title == projectTitle)

    projectsClosed.push({
        title: projectTitle,
        logo: projectsList[projectIndex].logo
    })


    // removes project card from the list of cards
    projectsList = projectsList.filter(projectCard => projectCard.title != projectTitle)

    // refreshes projects card list
    cardList();
}

/**
 * after clicking on the icon of a closed project card, its card reopens and the floating icon disappears
 * @param {*} projectTitle name of the project clicked
 */
function reAddCard(projectTitle) {
    // removes the project from the array that's meant for closed projects
    projectsClosed = projectsClosed.filter(projectClosed => projectClosed.title != projectTitle)

    let projectIndex = projects.findIndex(projectCard => projectCard.title == projectTitle)
    
    // readds the project entire data to the array that's responsible for the card's area visual
    projectsList.push(projects[projectIndex])

    cardList();
}

function projectDetails(title) {
    let index = projects.findIndex(project => project.title == title)
    sessionStorage.setItem("project", JSON.stringify(projects[index]));

    window.location.href = "./html/projectDetails.html"
}

async function initialize() {
    await loadProjects();
    cardList();
}

initialize();