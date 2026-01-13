function setup() {
    let canvasW = window.innerWidth
    let canvasH = window.innerHeight
    let canvas = createCanvas(canvasW, canvasH);
    canvas.parent("divCanvas");
}

function draw() {
    background("#1d143a")

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
}

function Building1(b1) {
    let posY = height-b1.H;

    //* Prédio */
    fill("#000");
    rect(0, posY,
        b1.W, b1.H);

    //* Mini detalhes */
    let roof = {
        W: b1.W*0.4,
        H: 20
    }

    rect(20, posY-20, roof.W, roof.H);
    rect(b1.W-roof.W-20, posY-20, roof.W, roof.H);
}

function Building2(b2) {
    let posY = height-b2.H;

    //* Telhado */
    fill("#000");

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
    fill("#000");
    rect(b2.X, posY,
        b2.W, b2.H);
}

function Building3(b3) {
    let posY = height-b3.H;

    //* Prédio */
    fill("#000");
    rect(b3.X, posY,
        b3.W, b3.H);
}

function Building4(b4) {
    let posY = height-b4.H;

    //* Prédio */
    fill("#000");
    rect(b4.X, posY,
        b4.W, b4.H);

    //* Parte do meio */
    fill("#000");
    rect(b4.X+b4.W/2-(b4.W/4)/2, posY*0.95,
        b4.W/4, b4.H);
}