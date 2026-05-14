let projectClicked;
if (sessionStorage.getItem('project') != null) {
    projectClicked = JSON.parse(sessionStorage.getItem('project'));
} else {
    redirectMainPage();
}

let techs = [
    {name: "Arduino", img:"https://imgs.search.brave.com/FW1BpdqbKcF55DbjQeH7VCg6AeaCNKGgs3tebxQ-cXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFyZHVpbm8taWNv/bi1zdmctZG93bmxv/YWQtcG5nLTIyNjA3/Mi5wbmc_Zj13ZWJw/Jnc9MTI4", alt: "logo of arduino"},
    {name: "React", img:"https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n", alt: "logo of React"},
    {name: "D3.js", img:"https://imgs.search.brave.com/IwWmXgdExAsOEhkFvEcM0xl3Uu5qlZpvf4C3LJB7t5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9kM2pzLnN2Zw", alt:"logo of d3.js"},
    {name: "p5.js", img:"../images/p5.png", alt:"logo of p5.js"},
    {name: "ml5.js", img:"https://imgs.search.brave.com/0v6XtuuwtG6u_U_DTZuCpDrs_860I4dzMsCw9NISdT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlLm1sNWpzLm9y/Zy9zdGF0aWMvMTU1/MmFiNzFlMTM0ZDNm/NmFhZWQwYzM5ZmJj/MGI4M2MvNGJhZDIv/bG9nby1wdXJwbGUt/Y2lyY2xlLnBuZw", alt: "logo of ml5.js"},
    {name: "JavaScript", img:"https://imgs.search.brave.com/s95Fx2_gXkyBRwh25xOsVWeoBWrlHfiF5ANp-8xgIoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvamF2YXNj/cmlwdC1qcy1sb2dv/LXBuZ19zZWVrbG9n/by0yNzM1NTcucG5n", alt: "logo of javascript"},
    {name: "Three.js", img:"https://imgs.search.brave.com/POddfkSkDEQORcswQ1JfXWpvf3y9rkeOnwJ-8TOej7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5h/ZGExLmRpc2NvdXJz/ZS1jZG4uY29tL2Zs/ZXgwMzUvdXBsb2Fk/cy90aHJlZWpzL29y/aWdpbmFsLzJYL2Iv/YmUyZjc1ZjcyNzUx/YzExY2JlMTU5M2M2/OWE5OWE1MjkwMGJm/MTJjYi5zdmc", alt:"logo of three.js"},
    {name: "HTML5", img:"https://imgs.search.brave.com/-A7DMn2sD4NJtodxwkO-SQM6qd5-pMzItJulgw-SvIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9odG1sLTEuc3Zn", alt: "logo of HTML"},
    {name: "CSS3", img:"https://imgs.search.brave.com/RgVw7TR4U4riBvB4_Aie0ngUM5orFW9NSnu-0lrFJkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc", alt: "logo of CSS"},
    {name: "Bootstrap", img:"https://imgs.search.brave.com/linDLuCrb1B71Jtl1QP-3vAdm7VNtPqEZWlf2RStp44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw", alt:"logo of Bootstrap"},
    {name: "Vue", img:"https://imgs.search.brave.com/lzEzLu8gYPE4210HEHtEAkn-20v0piUm6QAod9OycF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXZ1ZS1sb2dvLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1jb21wYW55/LWJyYW5kLXdvcmxk/LWxvZ29zLXZvbC01/LXBhY2staWNvbnMt/MjgyNDk3LnBuZz9m/PXdlYnAmdz0yNTY", alt: "logo of vue"},
]

let projectsDetails = [];

async function loadProjectDetails() {
    const response = await fetch("../data/projectDetails.json");
    projectsDetails = await response.json();
    console.log(projectsDetails);
}

function render() {
    document.querySelector("#windowTitle").innerHTML = `About "${projectClicked.title}" - notepad`

    let html = '';
    for (const project of projectsDetails) {
        console.log(project);
        
        if (project.title == projectClicked.title) {
            html += `
                <h1 class="bungee-regular">${project.title}</h1>

                <h2 class="karla" id="context">Context</h2>
                <p class="firstParagraph paragraph">
                    ${project.context}
                </p>
                <figure>
                    <img src="${project.img.src}"
                        alt='${project.img.alt}'>

                    <figcaption>${project.img.caption}</figcaption>
                </figure>


                <h2 class="karla" id="problem">The Problem</h2>
                <p class="firstParagraph paragraph">
                    ${project.problem}
                </p>


                <h2 class="karla" id="built">What I built</h2>
                <p class="firstParagraph paragraph">
                    ${project.roles.sentence}
                </p>

                <ul>
            `

            for (const role of project.roles.roles) {
                if (!role.category == "") {
                    html += `
                        <li>
                            <p class="roleCategory">
                                ${role.category}
                            </p>

                            <ul>
                    `
                }

                for (const step of role.steps) {
                    html += `
                        <li>${step}</li>
                    `
                }


                if (!role.category == "") {
                    html += `
                            </ul>
                        </li>
                    `
                }
            }

            html += `
                </ul>


                <h2 class="karla" id="tech">Tech Stack</h2>
                <div class="tableContainer">
                    <table class="techTable">
                        <thead>
                            <tr>
                                <th scope="col">Tech</th>
                                <th scope="col">Used for</th>
                            </tr>
                        </thead>

                        <tbody>
            `
            
            for (const tech of project.tech) {
                let techPos = techs.findIndex(techOfArray => techOfArray.name == tech.tech);

                if (tech.tech == "MVC") {
                html += `
                        <tr>
                            <td class="techCell">
                                ${tech.tech}
                            </td>
                            <td>${tech.desc}</td>
                        </tr>
                    ` 
                }

                else {
                    html += `
                        <tr>
                            <td class="techCell">
                                <img src="${techs[techPos].img}" alt="${techs[techPos].alt}">
                                ${tech.tech}
                            </td>
                            <td>${tech.desc}</td>
                        </tr>
                    `
                }
            }

            html += `     
                            <tr>
                                <td class="techCell">
                                    <img src="https://imgs.search.brave.com/-A7DMn2sD4NJtodxwkO-SQM6qd5-pMzItJulgw-SvIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9odG1sLTEuc3Zn" alt="logo of HTML">
                                    <img src="https://imgs.search.brave.com/RgVw7TR4U4riBvB4_Aie0ngUM5orFW9NSnu-0lrFJkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc" alt="logo of CSS">
                                    HTML5 and CSS3
                                </td>
                                <td>Structure and styling</td>
                            </tr>          
                        </tbody>
                    </table>

                    <p>Table featuring different techs and their usability on the project</p>
                </div>


                <h2 class="karla" id="challenges">Challenges</h2>
                <p class="firstParagraph paragraph">
                    ${project.challenges}
                </p>

                
                <h2 class="karla" id="learned">What I learned</h2>
                <p class="firstParagraph paragraph">
                    ${project.learned}
                </p>
            `
        }
    }

    document.querySelector(".articleText").innerHTML = html;

    // if (projectClicked.title == "Liberdade Cravada") {
    //     document.querySelector("footer").innerHTML = `
    //         <a target="_blank" href="${projectClicked.demo}" class="lDemo">Live demo</a>
    //         <a target="_blank" href="${projectClicked.github}">Github</a>
    //         <a target="_blank" class="cStudy" onclick="projectDetails('${projectClicked.title}')">Thesis</a>
    //     `;
    // } else {

        document.querySelector("footer").innerHTML = `
            <a target="_blank" href="${projectClicked.demo}" class="lDemo">Live demo</a>
            <a target="_blank" href="${projectClicked.github}">Github</a>
        `;
    // }
}

function redirectMainPage(toClose = true) {
    if (toClose) {
        window.location.href = "../index.html"
    } else {
        window.location.href = "../index.html#projectsTitle"
    }
}

async function initialize() {
    await loadProjectDetails();
    render();
}

initialize();