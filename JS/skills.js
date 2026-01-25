let skills = {
    frontend: [
        {name: "React.js", alt:"logo of react", aside:true, href:"https://react.dev/", img:"https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"},
        {name: "Vue.js", alt:"logo of vue", aside:true, href:"https://vuejs.org/", img:"https://imgs.search.brave.com/lzEzLu8gYPE4210HEHtEAkn-20v0piUm6QAod9OycF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXZ1ZS1sb2dvLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1jb21wYW55/LWJyYW5kLXdvcmxk/LWxvZ29zLXZvbC01/LXBhY2staWNvbnMt/MjgyNDk3LnBuZz9m/PXdlYnAmdz0yNTY"},
        {name: "Three.js", alt:"logo of three.js", aside:true, href:"https://threejs.org/", img:"https://imgs.search.brave.com/POddfkSkDEQORcswQ1JfXWpvf3y9rkeOnwJ-8TOej7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5h/ZGExLmRpc2NvdXJz/ZS1jZG4uY29tL2Zs/ZXgwMzUvdXBsb2Fk/cy90aHJlZWpzL29y/aWdpbmFsLzJYL2Iv/YmUyZjc1ZjcyNzUx/YzExY2JlMTU5M2M2/OWE5OWE1MjkwMGJm/MTJjYi5zdmc"},
        {name: "P5.js", alt:"logo of p5.js", aside:true, href:"https://p5js.org/", img:"./images/p5.png"},
        {name: "ML5.js", alt:"logo of ml5.js", aside:true, href:"https://ml5js.org/", img:"https://imgs.search.brave.com/0v6XtuuwtG6u_U_DTZuCpDrs_860I4dzMsCw9NISdT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlLm1sNWpzLm9y/Zy9zdGF0aWMvMTU1/MmFiNzFlMTM0ZDNm/NmFhZWQwYzM5ZmJj/MGI4M2MvNGJhZDIv/bG9nby1wdXJwbGUt/Y2lyY2xlLnBuZw"},
        {name: "Javascript", alt:"logo of javascript", aside:false, href:"", img:"https://imgs.search.brave.com/s95Fx2_gXkyBRwh25xOsVWeoBWrlHfiF5ANp-8xgIoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvamF2YXNj/cmlwdC1qcy1sb2dv/LXBuZ19zZWVrbG9n/by0yNzM1NTcucG5n"},
        {name: "HTML5", alt:"logo of HTML5", aside:false, href:"", img:"https://imgs.search.brave.com/-A7DMn2sD4NJtodxwkO-SQM6qd5-pMzItJulgw-SvIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9odG1sLTEuc3Zn"},
        {name: "CSS3", alt:"logo of CSS3", aside:false, href:"", img:"https://imgs.search.brave.com/RgVw7TR4U4riBvB4_Aie0ngUM5orFW9NSnu-0lrFJkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc"},
    ],
    backend: [],
    tools: [],
}

frontend();
function frontend() {
    let skillsHTML = '';
    for (const skill of skills.frontend) {
        if (skill.aside) {
            skillsHTML += `
                <a href="${skill.href}" target="_blank">
                    <figure>
                        <img src="${skill.img}" alt="${skill.alt}">
                        <figcaption>${skill.name}</figcaption>
                        <aside>
                            &#x276f;
                        </aside>
                    </figure>
                </a>
            `
        } else {
            skillsHTML += `
                <a>
                    <figure>
                        <img src="${skill.img}" alt="${skill.alt}">
                        <figcaption>${skill.name}</figcaption>
                    </figure>
                </a>
            `
        }
    }

    document.querySelector("#skillsBody").innerHTML = skillsHTML
}