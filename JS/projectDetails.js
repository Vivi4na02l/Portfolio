let projectClicked;
if (sessionStorage.getItem('project') != null) {
    projectClicked = sessionStorage.getItem('project');
} else {
    redirectMainPage();
}

let techs = [
    
    {name: "React", img:"https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n", alt: "logo of React"},
    {name: "D3.js", img:"https://imgs.search.brave.com/IwWmXgdExAsOEhkFvEcM0xl3Uu5qlZpvf4C3LJB7t5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9kM2pzLnN2Zw", alt:"logo of d3.js"},
    {name: "p5.js", img:"../images/p5.png", alt:"logo of p5.js"},
    {name: "ml5.js", img:"https://imgs.search.brave.com/0v6XtuuwtG6u_U_DTZuCpDrs_860I4dzMsCw9NISdT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlLm1sNWpzLm9y/Zy9zdGF0aWMvMTU1/MmFiNzFlMTM0ZDNm/NmFhZWQwYzM5ZmJj/MGI4M2MvNGJhZDIv/bG9nby1wdXJwbGUt/Y2lyY2xlLnBuZw", alt: "logo of ml5.js"},
    {name: "JavaScript", img:"https://imgs.search.brave.com/s95Fx2_gXkyBRwh25xOsVWeoBWrlHfiF5ANp-8xgIoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvamF2YXNj/cmlwdC1qcy1sb2dv/LXBuZ19zZWVrbG9n/by0yNzM1NTcucG5n", alt: "logo of javascript"},
    {name: "Three.js", img:"https://imgs.search.brave.com/POddfkSkDEQORcswQ1JfXWpvf3y9rkeOnwJ-8TOej7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5h/ZGExLmRpc2NvdXJz/ZS1jZG4uY29tL2Zs/ZXgwMzUvdXBsb2Fk/cy90aHJlZWpzL29y/aWdpbmFsLzJYL2Iv/YmUyZjc1ZjcyNzUx/YzExY2JlMTU5M2M2/OWE5OWE1MjkwMGJm/MTJjYi5zdmc", alt:"logo of three.js"},
    {name: "HTML5", img:"https://imgs.search.brave.com/-A7DMn2sD4NJtodxwkO-SQM6qd5-pMzItJulgw-SvIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9odG1sLTEuc3Zn", alt: "logo of HTML"},
    {name: "CSS3", img:"https://imgs.search.brave.com/RgVw7TR4U4riBvB4_Aie0ngUM5orFW9NSnu-0lrFJkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc", alt: "logo of CSS"},
    {name: "Bootstrap", img:"https://imgs.search.brave.com/linDLuCrb1B71Jtl1QP-3vAdm7VNtPqEZWlf2RStp44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw", alt:"logo of Bootstrap"},
]

let projectsDetails = [
    {
        title:"Liberdade Cravada",
        context:"Liberdade Cravada is an interactive web experience developed as an academic project focused on playful exploration, cultural context, and alternative forms of interaction. The project was designed for a younger audience, using a colorful, pixel-inspired aesthetic and game-like mechanics to encourage engagement rather than passive consumption. The experience combines visual interaction, data visualization, and physical input, placing strong emphasis on front-end logic and user behavior.",
        img: {
            src: "../images/LC_screenshot.png",
            alt: 'screenshot of first part of the main page of "Liberdade Cravada" project',
            caption:'Part of landing page showcasing the pixel-based visual identity',
        },
        problem: "The main challenge was to communicate complex information in a way that felt accessible and engaging to younger users. Traditional static interfaces felt insufficient for the intended audience, so the project needed to rely on interaction, visual feedback, and exploration rather than text-heavy explanations. At the same time, the project needed to handle multiple data sources and dynamic visual updates without overwhelming the user.",
        roles: {
            sentence:"I designed and developed the entire project, including the website structure, interactive experiences, and game logic. I built:",
            roles: [
                {
                    category: "Game Systems:",
                    steps: [
                        "Object movement and rotation",
                        "Collision detection between dynamic entities",
                        "Progressive difficulty (speed scaling over time)",
                        "Multiple loss conditions (immediate loss vs. lives system)",
                        "Full stat reset to allow replayability",
                    ]
                },
                {
                    category: "Input Methods:",
                    steps: [
                        "Keyboard controls",
                        "Hand-tracking via ml5.js, where player movement directly influences in-game behavior"
                    ]
                },
                {
                    category: "Data Visualisation:",
                    steps: [
                        "Interactive bar charts for election results",
                        "Circular visualisations for party vote distribution",
                        "User-controlled filters to compare selected parties dynamically"
                    ]
                },
            ]
        },
        tech: [
            {
                tech:"JavaScript",
                desc:"Logic, state management and user interactivity",
            },
            {
                tech:"D3.js",
                desc:"Interactive data visualisation",
            },
            {
                tech:"p5.js",
                desc:"Game logic, physics, rendering",
            },
            {
                tech:"ml5.js",
                desc:"Real-time hand detection",
            },
        ],
        challenges: "One of the main challenges was synchronizing different interaction layers: visual animations, user input, data updates, and physical input. Ensuring that these elements responded smoothly without conflicts required careful state handling. Another challenge was keeping the experience intuitive despite the number of underlying systems involved.",
        learned: "This project strengthened my ability to reason about complex interactive systems and reinforced the importance of clear architectural separation in front-end projects. It also deepened my understanding of how users engage with non-traditional interfaces and how visual feedback directly influences behavior."
    }
]

let html = '';
for (const project of projectsDetails) {
    if (project.title == projectClicked) {
        html += `
            <h1 class="bungee-regular">${project.title}</h1>

            <h2 class="karla">Context</h2>
            <p class="firstParagraph paragraph">
                ${project.context}
            </p>
            <figure>
                <img src="${project.img.src}"
                    alt='${project.img.alt}'>

                <figcaption>${project.img.caption}</figcaption>
            </figure>


            <h2 class="karla">The Problem</h2>
            <p class="firstParagraph paragraph">
                ${project.problem}
            </p>


            <h2 class="karla">What I built</h2>
            <p class="firstParagraph paragraph">
                ${project.roles.sentence}
            </p>

            <ul>
        `

        for (const role of project.roles.roles) {
            html += `
                <li>
                    <p class="roleCategory">
                        ${role.category}
                    </p>

                    <ul>
                `

                for (const step of role.steps) {
                    html += `
                        <li>${step}</li>
                    `
                }

            html += `
                    </ul>
                </li>
            `
        }

        html += `
            </ul>


            <h2 class="karla">Tech Stack</h2>
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

                <p>Table featuring different techs and its usability on the project</p>
            </div>


            <h2 class="karla">Challenges</h2>
            <p class="firstParagraph paragraph">
                ${project.challenges}
            </p>

            
            <h2 class="karla">What I learned</h2>
            <p class="firstParagraph paragraph">
                ${project.learned}
            </p>
        `
    }
}

document.querySelector(".articleText").innerHTML = html;

function redirectMainPage(toClose = true) {
    if (toClose) {
        window.location.href = "../index.html"
    } else {
        window.location.href = "../index.html#projectsTitle"
    }
}