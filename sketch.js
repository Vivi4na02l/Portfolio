function setup() {
    let canvasW = window.innerWidth
    let canvasH = window.innerHeight
    let canvas = createCanvas(canvasW, canvasH);
    canvas.parent("divCanvas");
}

function draw() {
    noStroke();

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
        W: width*0.4,
        H: height*0.3
    }

    let building3 = {
        X: building2.X + building2.W,
        W: width*0.2,
        H: height*0.4
    }

    let building4 = {
        X: building3.X + building3.W,
        W: width*0.2,
        H: height*0.45
    }

    Building1(building1)
    Building2(building2)
    Building3(building3)
    Building4(building4)

    let aurora = {
        colour: "#02f57396"
    }

    Sky(sky.c2, -height*0.1)
    Sky(sky.c3, height*0.05)

    fill("#cebf97")
    circle(width*0.2, height*0.15, width*0.05)
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

    rect(roof.W*0.2, posY-20, roof.W, roof.H);
    rect(b1.W-roof.W-(roof.W*0.2), posY-20, roof.W, roof.H);
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
}

function Building4(b4) {
    let posY = height-b4.H;

    //* Prédio */
    rect(b4.X, posY,
        b4.W, b4.H);

    //* Parte do meio */
    rect(b4.X+b4.W/2-(b4.W/4)/2, posY*0.95,
        b4.W/4, b4.H);
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