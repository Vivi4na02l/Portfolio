let skills = {
    frontend: [
        {name: "Javascript", alt:"logo of javascript", aside:false, href:"", img:"https://imgs.search.brave.com/s95Fx2_gXkyBRwh25xOsVWeoBWrlHfiF5ANp-8xgIoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvamF2YXNj/cmlwdC1qcy1sb2dv/LXBuZ19zZWVrbG9n/by0yNzM1NTcucG5n"},
        {name: "React.js", alt:"logo of react", aside:true, href:"https://react.dev/", img:"https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"},
        {name: "Vue.js", alt:"logo of vue", aside:true, href:"https://vuejs.org/", img:"https://imgs.search.brave.com/lzEzLu8gYPE4210HEHtEAkn-20v0piUm6QAod9OycF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXZ1ZS1sb2dvLWlj/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1jb21wYW55/LWJyYW5kLXdvcmxk/LWxvZ29zLXZvbC01/LXBhY2staWNvbnMt/MjgyNDk3LnBuZz9m/PXdlYnAmdz0yNTY"},
        {name: "HTML5", alt:"logo of HTML5", aside:false, href:"", img:"https://imgs.search.brave.com/-A7DMn2sD4NJtodxwkO-SQM6qd5-pMzItJulgw-SvIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9odG1sLTEuc3Zn"},
        {name: "CSS3", alt:"logo of CSS3", aside:false, href:"", img:"https://imgs.search.brave.com/RgVw7TR4U4riBvB4_Aie0ngUM5orFW9NSnu-0lrFJkk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9jc3MtMy5zdmc"},
        {name: "REST APIs (comsumption)", alt:"brackets icon to represent APIs", aside:false, href:"", img:"./images/brackets.png"},
        {name: "D3.js", alt:"logo of D3.js", aside:true, href:"https://d3js.org/", img:"https://imgs.search.brave.com/IwWmXgdExAsOEhkFvEcM0xl3Uu5qlZpvf4C3LJB7t5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9kM2pzLnN2Zw"},
        {name: "Three.js", alt:"logo of three.js", aside:true, href:"https://threejs.org/", img:"https://imgs.search.brave.com/POddfkSkDEQORcswQ1JfXWpvf3y9rkeOnwJ-8TOej7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5h/ZGExLmRpc2NvdXJz/ZS1jZG4uY29tL2Zs/ZXgwMzUvdXBsb2Fk/cy90aHJlZWpzL29y/aWdpbmFsLzJYL2Iv/YmUyZjc1ZjcyNzUx/YzExY2JlMTU5M2M2/OWE5OWE1MjkwMGJm/MTJjYi5zdmc"},
        {name: "P5.js", alt:"logo of p5.js", aside:true, href:"https://p5js.org/", img:"./images/p5.png"},
        {name: "ML5.js", alt:"logo of ml5.js", aside:true, href:"https://ml5js.org/", img:"https://imgs.search.brave.com/0v6XtuuwtG6u_U_DTZuCpDrs_860I4dzMsCw9NISdT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlLm1sNWpzLm9y/Zy9zdGF0aWMvMTU1/MmFiNzFlMTM0ZDNm/NmFhZWQwYzM5ZmJj/MGI4M2MvNGJhZDIv/bG9nby1wdXJwbGUt/Y2lyY2xlLnBuZw"},
    ],
    backend: [
        {name: "REST API development", alt:"brackets icon to represent APIs", aside:false, href:"", img:"./images/brackets.png"},
        {name: "Node.js", alt:"logo of Node.js", aside:true, href:"https://nodejs.org/en", img:"https://imgs.search.brave.com/-rvijjkOvULEa0bhauyFVgy3CZWOkZEe8RAZBJcbjHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5vZGUtanMtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTExNzQ5/MjUucG5nP2Y9d2Vi/cCZ3PTI1Ng"},
        {name: "MySQL", alt:"logo of MySQL", aside:true, href:"https://www.mysql.com/", img:"https://imgs.search.brave.com/gOT4KwhoJuhZdBHMm06gcUUu7WEBdENlojISK4vZNXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2xvZ28tbXlzcWwt/cG5nL2xvZ28tbXlz/cWwtbXlzcWwtbG9n/by1wbmctaW1hZ2Vz/LWFyZS1kb3dubG9h/ZC1jcmF6eXBuZy0x/NS5wbmc"},
        {name: "MongoDB / Mongoose", alt:"logo of MongoB", aside:true, href:"https://www.mongodb.com/", img:"https://imgs.search.brave.com/X72COLv48uoRROS9Q52eEyaK0uCwxAOWJBgghU59YuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ0LzIvbW9uZ29k/Yi1sb2dvLXBuZ19z/ZWVrbG9nby00NDQ4/NDQucG5n"},
        {name: "Postman", alt:"logo of Postman", aside:true, href:"https://www.postman.com/", img:"https://imgs.search.brave.com/NwbnwPNjDpFS6kIUk7wDMSMD9uYMd0k6v6x2hOSLqqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnBvc3RtYW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA0L2xvZ28tbWFy/ay0zMDB4MzAwLnBu/Zw"},
    ],
    tools: [
        {name:"Visual Studio Code", alt:"logo of Visual Studio Code", aside:true, href:"https://code.visualstudio.com/", img:"https://imgs.search.brave.com/KfYWoj3g6heWRKKDZapmIs3dC4JvLPRlYR9QJ_obxSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy92aXN1YWwtc3R1/ZGlvLWNvZGUtMS0x/LnN2Zw"},
        {name:"Git", alt:"logo of git", aside:true, href:"https://git-scm.com/", img:"https://imgs.search.brave.com/hHpm-bAKw7C2sZzlUCJrr6GUrl-fnWUWZjKMaJXV_o4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n"},
        {name:"GitHub", alt:"logo of github", aside:true, href:"https://github.com/", img:"https://imgs.search.brave.com/np-NaC0N3gBsHZTYs6VaesbSU5ZQTfcZ-SAea-uqIb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4ZmNlZjEw/MTRjMGI1ZTQ4YzAu/cG5n"},
        {name:"Figma", alt:"logo of Figma", aside:true, href:"https://www.figma.com/", img:"https://imgs.search.brave.com/Z5bSQ7ggsYrjMW6TV7ocPWVVHDCzV496j9gbfC2Osqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy81OTlyNmh0/Yy9yZWdpb25hbGl6/ZWQvNDZhNzZjODAy/MTc2ZWIxN2IwNGUx/MjEwOGRlN2U3ZTBm/MzczNmRjNi0xMDI0/eDEwMjQucG5nP3c9/ODA0Jmg9ODA0JnE9/NzUmZml0PW1heCZh/dXRvPWZvcm1hdA"},
    ],
    extras: [
        {name:"Python", alt:"logo of Python", aside:true, href:"https://www.python.org/", img:"https://imgs.search.brave.com/Gc4o0TZByHDXOrUog0t60tOvt-BmVp3pOLjo8FdPnCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n"},
        {name:"PHP", alt:"logo of PHP", aside:true, href:"https://www.php.net/", img:"https://imgs.search.brave.com/_i-dLx6f6BSWR_Vl0pCiP3LSh3Tg5TA21KmQ1p4sU7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBocC1sb2dvLWlj/b24tc3ZnLWRvd25s/b2FkLXBuZy0yMjg0/OTE4LnBuZz9mPXdl/YnAmdz0xMjg"},
        {name:"Java", alt:"logo of Java", aside:true, href:"https://www.java.com/en/", img:"https://imgs.search.brave.com/po-I3Arxkk_lXpY8jR2WfLUgCHQT_-BPM4pKaOcX4Zg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Fi/cmFuaGUvcHJvZ3Jh/bW1pbmctbGFuZ3Vh/Z2VzLWxvZ29zL21h/c3Rlci9zcmMvamF2/YS9qYXZhLnN2Zw"},
        {name:"C#", alt:"logo of C#", aside:false, href:"", img:"https://imgs.search.brave.com/uA-Y8z5rWll2g2ntbyId0I7ijTklNne2pubqxrkE8BU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjEwNy9Q/TkcvOTYvZmlsZV90/eXBlX2NzaGFycF9p/Y29uXzEzMDY2My5w/bmc"},
    ]
}

tabClicked();
function tabClicked(tab = "frontend", clicked = false, element) {
    let skillsTab;

    if (tab == "frontend") {
        skillsTab = skills.frontend
    } else if (tab == "backend") {
        skillsTab = skills.backend
    } else if (tab == "workflow") {
        skillsTab = skills.tools
    } else {
        skillsTab = skills.extras
    }

    if (clicked) {
        for (const button of document.querySelectorAll(".btnSkills")) {
            button.classList.remove("skillsTabActive")
        }

        element.classList.add("skillsTabActive")
    }

    let skillsHTML = '';
    for (const skill of skillsTab) {
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