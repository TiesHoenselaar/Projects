let img;

function preload() {
    img = loadImage('img/waterpas.jpg');
}

function setup() {
    createCanvas(1500, 400);
    image(img, 0, 0, 1500, 139);
    input = createInput();
    input.position(0, 300);

    weight_question = createElement('h2', 'Hoeveel weegt het flesje inclusief inhoud?');
    weight_question.position(0, 250);
}

function draw() {
  // put drawing code here
}
