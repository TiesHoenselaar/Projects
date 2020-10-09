let img, input, weight_question, roll_dice_button;
let marge  = 5;
let dice_value = 5;
let dices  = [];

function preload() {
    // https://dice.virtuworld.net/?nr=3
    img = loadImage('img/waterpas.jpg');
    for (let i = 0; i < 6; i++) {
        dices[i] = loadImage('img/dice_' + (i+1) + '.jpg');
        // console.log("Loaded dice " + i);
    }
}

function setup() {
    createCanvas(1136, 556);
    background(80);
    imageMode(CENTER);
    image(img, width/2, 20, 750, 70);
    // img.resize(568,278);
    input = createInput('', 'number');
    input.size(200, 100);
    input.position(width/2-100, 300);
    // input.center();

    let marge_text = "Marge is " + marge + " gram";
    text(marge_text, 1000, 50);

    weight_question = createElement('h2', 'Hoeveel weegt het flesje inclusief inhoud?');
    weight_question.position(300, 250);

    image(dices[dice_value], 900, 300);

    // Roll dice
    roll_dice_button = createButton('Roll dice');
    roll_dice_button.position(780,220);
    roll_dice_button.mousePressed(rollDice);



}

function mouseClicked(){
    // console.log(mouseX, mouseY);

    if(
        mouseX > 900 - 250 / 2 &&
        mouseX < 900 + 250 / 2 &&
        mouseY > 300 - 250 / 2 &&
        mouseY < 300 + 250 / 2
    ) {
        rollDice();
    }
}

function rollDice() {
    dice_value = int(random(0, 6));
    // console.log("Rolled " + dice_value);
    image(dices[dice_value], 900, 300);
}

function draw() {
  // put drawing code here
}
