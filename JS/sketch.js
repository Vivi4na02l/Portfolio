let snowflakes = []
let snow = {
    c1: "#fff7d6",
    c2: "#305573",
    c3: "#183953"
}
let moon
let ms, ms_start;

function setup() {
    let canvasW = window.innerWidth
    let canvasH = window.innerHeight
    let canvas = createCanvas(canvasW, canvasH);
    canvas.parent("divCanvas");

    moon = {
        x: width*0.2,
        y: height*0.15
    }

    for (let i = 0; i < 50; i++) {
        snowflakes.push(new Snowflake());
    }
}

function draw() {
    clear();
    noStroke();
    ms = millis()

    let sky = {
        c1: "#032232",
        c2: "#042941",
        c3: "#14334c"
    }

    background(sky.c1)

    fill("#0a1520")
    let building1 = {
        W: width*0.2,
        H: height*0.5
    }

    let building2 = {
        X: building1.W,
        W: width*0.25,
        H: height*0.3
    }

    let building3 = {
        X: building2.X + building2.W,
        W: width*0.15,
        H: height*0.5
    }

    let building4 = {
        X: building3.X + building3.W,
        W: width*0.2,
        H: height*0.4
    }

    let building5 = {
        X: building4.X + building4.W,
        W: width*0.2,
        H: height*0.45
    }

    Building1(building1)
    Building2(building2)
    Building3(building3)
    Building4(building4)
    Building5(building5)

    Sky(sky.c2, -height*0.1)
    Sky(sky.c3, height*0.05)

    //** MOON */
    fill("#cebf97")
    circle(moon.x, moon.y, width*0.05)

    // console.log(ms+" - "+ms_start);
    if (ms < 500) {
        ms_start = ms
    }

    //* adds more snowflakes each half a second */
    if (ms-ms_start > 500) {
        Snowflakes()
        ms_start = ms;
    }

    //* SNOWFLAKES */
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
    
        snowflake.draw();
        snowflake.update();

        if (snowflake.afterBorder()) {
            snowflakes.splice(i, 1);
        }
    }
}

function Building1(b1) {
    let posY = height-b1.H;

    //* Prédio */
    rect(0, posY,
        b1.W, b1.H);

    //* Mini detalhes */
    let roof = {
        W: b1.W*0.4,
        H: 20
    }

    rect(roof.W*0.2, posY-roof.H, roof.W, roof.H);
    rect(b1.W-roof.W-(roof.W*0.2), posY-roof.H, roof.W, roof.H);
}

function Building2(b2) {
    let posY = height-b2.H;

    //* Telhado */
    beginShape();

    vertex(b2.X, posY-height*0.01);
    vertex(b2.X+b2.W/4, posY-height*0.01);
    vertex(b2.X+b2.W/4, posY-height*0.02);
    vertex(b2.X+b2.W/2, posY-height*0.02);
    vertex(b2.X+b2.W/2, posY-height*0.01);
    vertex(b2.X+b2.W*0.85, posY-height*0.01);
    vertex(b2.X+b2.W*0.85, posY-height*0.02);
    vertex(b2.X+b2.W*0.9, posY-height*0.02);
    vertex(b2.X+b2.W*0.9, posY-height*0.01);
    vertex(b2.X+b2.W, posY-height*0.01);
    vertex(b2.X+b2.W, posY);
    vertex(b2.X, posY);

    endShape();


    //* Prédio */
    rect(b2.X, posY,
        b2.W, b2.H);
}

function Building3(b3) {
    let posY = height-b3.H;

    //* Prédio */
    rect(b3.X, posY,
        b3.W, b3.H);

    //* Mini detalhes */
    let roofs = [
        {
            W: b3.W*0.8,
            H: 10
        },
        {
            W: b3.W*0.03,
            H: 30
        }
    ];

    //* Detalhes telhado */
    rect(b3.X+b3.W*0.1, posY-roofs[0].H,
        roofs[0].W, roofs[0].H)
    rect(b3.X+b3.W*0.7, posY-roofs[1].H,
        roofs[1].W, roofs[1].H)
}

function Building4(b4) {
    let posY = height-b4.H;

    //* Prédio */
    rect(b4.X, posY,
        b4.W, b4.H);
}

function Building5(b5) {
    let posY = height-b5.H;

    //* Prédio */
    rect(b5.X, posY,
        b5.W, b5.H);

    //* Parte do meio */
    rect(b5.X+b5.W/2-(b5.W/4)/2, posY*0.95,
        b5.W/4, b5.H);
}

function Sky(colour, diff = 0) {
    fill(colour)
    beginShape();
    vertex(0, height*0.2 - diff);

    bezierVertex(0, height*0.2 - diff,
                width*0.2, height*0.1 - diff,
                width*0.25, height*0.2 - diff);

    bezierVertex(width*0.25, height*0.2 - diff,
                width*0.35, height*0.4 - diff,
                width*0.5, height*0.15 - diff);

    bezierVertex(width*0.5, height*0.15 - diff,
                width*0.55, height*0.05 - diff,
                width*0.62, height*0.15 - diff);

    bezierVertex(width*0.62, height*0.15 - diff,
                width*0.7, height*0.3 - diff,
                width*0.8, height*0.2 - diff);

    bezierVertex(width*0.8, height*0.2 - diff,
                width*0.9, height*0.1 - diff,
                width, height*0.2 - diff);

    vertex(width, 0);
    vertex(0, 0);

    endShape();
}

function Snowflakes() {
    for (let i = 0; i < 50; i++) {
        snowflakes.push(new Snowflake());
    }
}

class Snowflake {
    constructor() {
        this.x = Math.floor(Math.random() * width);
        this.r = Math.floor(Math.random() * 4);
        this.y = 0;
        this.speed = (Math.random() * 1.2)+0.5
        this.windAffected = {
            isAffected: Math.floor(Math.random() * 2),
            direction: Math.floor(Math.random() * 2)
        }
    }

    draw() {
        if (this.x >= moon.x-width*0.1
            && this.x <= moon.x+width*0.1
        ) {
            //* if it's the closest to the moon in X axis */

            if (this.y < moon.y+height*0.3) {
                fill(snow.c1)                
            } else {
                fill(snow.c2)
            }

        } else if (this.x < moon.x-width*0.1
            || (this.x > moon.x+width*0.1
            && this.x < moon.x+width*0.3)
        ) {
            //* if it's kinda close to the moon */
            fill(snow.c2)
        } else {
            //* if it's too far from the moon */
            fill(snow.c3)
        }

        circle(this.x, this.y, this.r)
    }

    update() {
        this.y += this.speed

        if (this.windAffected.isAffected) {
            if (this.windAffected.direction) {
               this.x += 0.1; 
            } else {
                this.x -= 0.1;
            }
        }
    }

    afterBorder() {
        if (this.y >= height) {
            return true;
        }
    }
}