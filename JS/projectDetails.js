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
    },
    {
        title:"Alvid-19",
        context:"ALVID-19 is an award-winning gamified educational web platform developed as a team project. The application combines interactive games, user accounts, and role-based features to create a playful learning environment. The project focuses on user interaction and engagement through gamification, allowing users to play educational games, track progress, and interact with the platform through personalized accounts and features.",
        img: {
            src: "../images/alvid-19_screenshot.png",
            alt: 'screenshot of first part of the main page of "Alvid-19" project',
            caption:'Part of landing page showcasing the visual identity',
        },
        problem: "Educational platforms often struggle to maintain user engagement, especially when content is presented in static or purely informational formats. The challenge of this project was to design an experience where learning could happen through interaction and game mechanics rather than passive reading. At the same time, the system needed to support multiple user roles, authentication flows, and dynamic features that changed depending on the user’s permissions and activity.",
        roles: {
            sentence:"In this group project, I was responsible for a large portion of the frontend functionality and user interaction logic.",
            roles: [
                {
                    category: "",
                    steps: [
                        "Development of the Memory Game",
                        "Implementation of user authentication logic (login, register, and account editing)",
                        "Full user profile system, including password updates",
                        "Avatar selection modal and profile image management",
                        "Personal ranking system and global ranking of registered users",
                        "Role-based user system with different permissions for normal users, blocked users and administrators",
                        "Admin tools for blocking/unblocking users and managing quizzes",
                        "Conditional interface behavior depending on authentication state",
                        "Mobile navigation menu replacing a traditional navbar",
                        "Functional carousels and responsive layout adjustments",
                        "Animated character image switching to simulate speech",
                        "Favorites modal system",
                        "Refactoring the Hangman game to follow the MVC architecture",
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
                tech:"MVC",
                desc:"Architeture implemented with vanilla JavaScript",
            },
        ],
        challenges: "One of the main challenges was managing multiple interconnected systems within a single interface, including authentication, role-based permissions, and interactive games. Ensuring that different user roles triggered the correct functionality required careful control of conditional logic throughout the application.",
        learned: "This project helped me understand how to structure larger front-end applications and introduced me to the MVC architectural pattern. It also strengthened my ability to build systems where user state and permissions directly influence interface behavior."
    },
    {
        title:"Asteroids",
        context:"Asteroids is a browser-based reinterpretation of the classic arcade game developed as a group project. The project focuses on real-time game logic, collision systems, and interactive gameplay mechanics. Unlike the original Asteroids game, where objects wrap around screen edges, this version introduces solid boundaries that change the dynamics of gameplay and create a more constrained environment.",
        img: {
            src: "../images/A_screenshot.png",
            alt: 'screenshot of first part of the main page of "Asteroids" project',
            caption:'Screenshot showcasing gameplay.',
        },
        problem: "Classic arcade games rely on multiple systems running simultaneously: player movement, enemy behavior, collision detection, and game state management. The challenge of this project was to recreate these systems while redesigning some of the original mechanics. The game also introduces a mouse-based aiming system instead of the traditional shooting controls, requiring careful coordination between player input and projectile direction.",
        roles: {
            sentence:"In this group project, I was primarily responsible for implementing core gameplay systems.",
            roles: [
                {
                    category: "",
                    steps: [
                        "Asteroid spawning logic and movement behavior",
                        "Collision detection between asteroids and the spaceship",
                        "Asteroid rotation around their own axis",
                    ]
                },
                {
                    category: "Asteroid destruction mechanics:",
                    steps: [
                        "Asteroids split into two smaller asteroids when destroyed",
                        "Smaller asteroids split again until reaching the smallest size",
                        "The smallest asteroids disappear completely"
                    ]
                },
                {
                    category: "",
                    steps: [
                        "Automatic respawn of asteroids when all on-screen asteroids are destroyed",
                        "Missile spawning logic",
                        "Missile tracking system that follows the spaceship in real time",
                        "Real-time rotation of the missile sprite toward the spaceship",
                        "Collision detection between missiles and the spaceship",
                        "Implementation of a lives system (3 lives)",
                        "Game over logic with restart functionality",
                        "Pause system using both a UI button and the ESC key",
                        "Pause menu interface and logic",
                        "Ship customization menu allowing players to change the ship color",
                    ]
                },
            ]
        },
        tech: [
            {
                tech:"JavaScript",
                desc:"Game logic and interaction systems",
            },
            {
                tech:"Three.js",
                desc:"Rendering and scene management",
            },
            {
                tech:"Bootstrap",
                desc:"UI components used in menus and controls",
            },
        ],
        challenges: "The most complex part of the project was coordinating multiple collision systems while maintaining consistent gameplay behavior. Managing asteroid splitting mechanics and ensuring that projectiles interacted correctly with all entities required careful organization of the game loop.",
        learned: "This project strengthened my understanding of real-time game logic, entity interactions, and collision systems. It also helped me structure complex interactive systems where multiple dynamic objects must update simultaneously."
    },
    {
        title:"Vaporwave Breakout",
        context:"Vaporwave Breakout is a personal reinterpretation of the classic Breakout arcade game. The project explores alternative interaction methods for controlling browser-based games, allowing players to interact using either physical hardware or camera-based hand detection. The goal was to experiment with non-traditional input systems while preserving the core gameplay mechanics of the original Breakout concept.",
        img: {
            src: "../images/VB_screenshot.png",
            alt: 'screenshot of the initial menu of "Vaporwave Breakout" project',
            caption:"Vaporwave Breakout's main menu showcasing the visual identity",
        },
        problem: "Traditional browser games rely on keyboard or mouse input. This project explored how alternative interaction systems could influence gameplay while maintaining responsive control and clear feedback. The main challenge was to integrate hardware and camera-based input into a web-based game environment.",
        roles: {
            sentence:"I designed and implemented the entire project, including the gameplay logic and interaction systems.",
            roles: [
                {
                    category: "",
                    steps: [
                        "Breakout-style gameplay mechanics",
                        "Collision detection between ball, paddle, and blocks",
                        "Procedurally generated block layouts using loops",
                    ]
                },
                {
                    category: "Two interaction modes selectable from the main menu:",
                    steps: [
                        "Arduino-based physical controller",
                        "Camera-based hand detection using ml5.js"
                    ]
                },
                {
                    category: "",
                    steps: [
                        "Input handling that verifies device availability before starting the game",
                        "Real-time response between hardware input and game behavior",
                    ]
                },
            ]
        },
        tech: [
            {
                tech:"JavaScript",
                desc:"Game logic and interaction systems",
            },
            {
                tech:"p5.js",
                desc:"Rendering, animation, physics",
            },
            {
                tech:"Arduino",
                desc:"Physical input controls",
            },
        ],
        challenges: "The main challenge was synchronizing different input systems with the game loop. Both the Arduino controller and the hand-tracking system needed to provide consistent input signals so the game mechanics behaved predictably. Handling hardware availability and camera permissions also required additional error handling.",
        learned: "This project improved my understanding of integrating hardware interaction with browser-based applications. It also reinforced how different input systems influence gameplay design and user experience."
    },
    {
        title:"React Calculator",
        context:"The React Calculator is a web application created to explore component-based architecture and predictable state management using React. The project replicates the behavior of a mobile calculator while focusing on clean logic separation and maintainable structure.",
        img: {
            src: "../images/calculator_screenshot.png",
            alt: 'screenshot of first part of the main page of "React Calculator" project',
            caption:'Screenshot showcasing the calculator visual',
        },
        problem: "Calculator interfaces appear simple but require careful handling of user input, operation chaining, and state transitions. The challenge was to design a system that keeps the calculation logic predictable while maintaining a modular component structure.",
        roles: {
            sentence:"I designed and developed the entire application.",
            roles: [
                {
                    category: "",
                    steps: [
                        "Basic arithmetic operations (addition, subtraction, multiplication, division)",
                        "Component-based interface separating buttons, display, and logic",
                        "Controlled state management for calculation flow",
                        "Input validation to prevent inconsistent states",
                        "Layout inspired by mobile calculator interfaces",
                    ]
                },
            ]
        },
        tech: [
            {
                tech:"React",
                desc:"Component architecture and state management",
            },
            {
                tech:"JavaScript",
                desc:"Calculation logic",
            },
        ],
        challenges: "Handling chained operations and maintaining a predictable calculation flow required careful management of application state. Ensuring that user input behaved consistently across different sequences of operations was a key challenge.",
        learned: "This project strengthened my understanding of React’s component model and state management. It also improved my ability to design modular logic systems where user interaction drives application behavior."
    },
    {
        title:"Health Dashboard",
        context:"Health Dashboard is a personal web application built with Vue.js that helps users manage groceries, pantry ingredients, recipes and nutritional intake in a single interface. The project focuses on building a structured and interactive dashboard experience while applying modern frontend architecture principles. The application is currently under active development, with additional features and improvements being continuously implemented.",
        img: {
            src: "../images/health_screenshot.png",
            alt: 'screenshot of the dashboard of project',
            caption:'Screenshot showcasing the dashboard',
        },
        problem: "Managing groceries, ingredients and nutritional intake often involves using multiple different tools or applications. This can make it difficult to keep track of what ingredients are available at home, what needs to be purchased, and how meals contribute to daily nutrition goals. The goal of this project was to design a centralized dashboard interface where users can manage ingredients, create recipes, estimate nutritional intake and organize their grocery shopping in a more structured way.",
        roles: {
            sentence:"This is a solo frontend project, where I designed the architecture and implemented the entire application.",
            roles: [
                {
                    category: "",
                    steps: [
                        "Grocery shopping list management",
                        "Pantry ingredient tracking",
                        "Ingredient quantity management",
                        "Manual ingredient creation with nutritional values",
                        //"Ingredient search using an external nutrition API",
                        "Recipe creation and management",
                        "Weekly activity tracking",
                        "Dynamic dashboard navigation",
                        "Interactive UI elements and animations",
                        "State management using a centralized store",
                        "Persistent user data using local storage",
                    ]
                },
            ]
        },
        tech: [
            {
                tech:"Vue",
                desc:"Reactive UI architecture with reactive state",
            },
            {
                tech:"JavaScript",
                desc:"Dynamic UI logic and data manipulation",
            },
        ],
        challenges: "One of the main challenges was designing a clean data structure for managing ingredients, shopping lists and pantry quantities while keeping the UI reactive and synchronized with the global state. Additionally, building interactive UI elements, such as the dynamic navigation slider and ingredient management logic, required careful handling of reactive state and DOM updates.", // antes do additionally: Another challenge involved integrating nutritional data from an external API and adapting the returned data structure to fit the application’s internal model.
        learned: "Through this project I strengthened my understanding of building scalable frontend applications using Vue. I improved my skills in structuring component-based architectures, managing global state with Pinia, handling reactive data and derived state. The project also helped me gain experience organizing larger frontend codebases and designing interactive UI behaviour driven by application state." //, and integrating external APIs into a reactive interface (depois do pinia state)
    },
]

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

function redirectMainPage(toClose = true) {
    if (toClose) {
        window.location.href = "../index.html"
    } else {
        window.location.href = "../index.html#projectsTitle"
    }
}