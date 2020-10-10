let img, input, weight_question, roll_dice_button;
let marge  = 5;
let dice_value = 5;
let dices  = [];
let multiplier = 10;
let streefgewicht = 0;
let flesje_plus_drinken_gewicht;
let marge_text, multiplier_text, aantal_fout_gebieden_text;
var red_color, green_color;
var streefwaarde_precies;
var temp;
let gewicht_texten_links = [], gewicht_texten_rechts = [];
var aantal_fout_gebieden = 2;

function preload() {
    // https://dice.virtuworld.net/?nr=3
    // img = loadImage('img/waterpas.jpg');
    for (let i = 0; i < 6; i++) {
        dices[i] = loadImage('img/dice_' + (i+1) + '.jpg');
        // console.log("Loaded dice " + i);
    }
}

function setup() {
    createCanvas(1136, 556);
    background(80);
    imageMode(CENTER);
    // image(img, width/2, 20, 750, 70);
    // img.resize(568,278);
    gewicht_input = createInput(500, 'number');
    gewicht_input.style('font-size', '20px');
    gewicht_input.size(100, 50);
    gewicht_input.position(width/2-100, 300);
    // input.center();

    // let marge_text = "Marge is " + marge + " gram";
    // text(marge_text, 1000, 50);

    weight_question = createElement('h2', 'Hoeveel weegt het flesje inclusief inhoud?');
    weight_question.position(300, 250);

    var marge_min_button = createButton('-');
    marge_min_button.position(25, 300);
    marge_min_button.mousePressed(margeMin);
    marge_min_button.style('font-size', '30px');

    var marge_plus_button = createButton('+');
    marge_plus_button.position(60, 300);
    marge_plus_button.mousePressed(margePlus);
    marge_plus_button.style('font-size', '30px');

    var multiplier_min_button = createButton('-');
    multiplier_min_button.position(25, 350);
    multiplier_min_button.mousePressed(multiplierMin);
    multiplier_min_button.style('font-size', '30px');

    var multiplier_plus_button = createButton('+');
    multiplier_plus_button.position(60, 350);
    multiplier_plus_button.mousePressed(multiplierPlus);
    multiplier_plus_button.style('font-size', '30px');

    var aantal_fout_gebieden_min_button = createButton('-');
    aantal_fout_gebieden_min_button.position(25, 400);
    aantal_fout_gebieden_min_button.mousePressed(aantal_fout_gebiedenMin);
    aantal_fout_gebieden_min_button.style('font-size', '30px');

    var aantal_fout_gebieden_plus_button = createButton('+');
    aantal_fout_gebieden_plus_button.position(60, 400);
    aantal_fout_gebieden_plus_button.mousePressed(aantal_fout_gebiedenPlus);
    aantal_fout_gebieden_plus_button.style('font-size', '30px');


    image(dices[dice_value], 900, 300);

    // Roll dice
    roll_dice_button = createButton('Rol dobbelsteen');
    roll_dice_button.position(width / 2 - 50, 400);
    roll_dice_button.size(100, 100);
    roll_dice_button.mousePressed(rollDice);

    marge_text = createDiv('hoi').size(100, 20);
    marge_text.html('Marge = ' + marge);

    multiplier_text = createDiv('').size(100, 20);
    multiplier_text.html('Multiplier = ' + multiplier);

    aantal_fout_gebieden_text = createDiv('').size(200, 20);
    aantal_fout_gebieden_text.html('Aantal fout gebieden = ' + aantal_fout_gebieden);

    streefgewicht_text = createDiv('').size(250, 20);
    streefgewicht_text.html('Streefgewicht is ' + streefgewicht + ' gram');

    // rechts
    for (i=0;i<=aantal_fout_gebieden+1;i++){
        temp = createDiv('').size(50, 20);
        temp.html(streefgewicht);
        temp.style('font-size', '20px');
        temp.style('position', 'absolute');
        temp.style('top', '210px');
        temp.style('text-align', 'center');
        temp.style('left', (width / 2) - 25 + i * marge * 20+ 'px');
        gewicht_texten_rechts[i] = temp;
    }

    // links
    for (j=0;j<=aantal_fout_gebieden;j++){
        temp = createDiv('').size(50, 20);
        temp.html(streefgewicht);
        temp.style('font-size', '20px');
        temp.style('position', 'absolute');
        temp.style('top', '210px');
        temp.style('text-align', 'center');
        temp.style('left', (width / 2) - 25 - (j+1) * marge * 20+ 'px');
        gewicht_texten_links[j] = temp;
    }

    drawRuler();

}

function drawRuler(){
    green_color = color(0, 255, 0);
    red_color = color(255, 0, 0);
    noStroke();
    fill(green_color);
    rect(width / 2, 40, 20 * marge, 75);
    rect(width / 2, 40, -20 * marge, 75);
    fill(red_color);
    rect(width / 2 + 20 * marge, 40, 20 * aantal_fout_gebieden * marge, 75);
    rect(width / 2 - 20 * marge, 40, -20 * aantal_fout_gebieden * marge, 75);

    stroke(0);
    strokeWeight(3);

    // kleine streepjes
    for (i = 0; i <= marge * (1+aantal_fout_gebieden); i++) {
        line(width / 2 + i*20, 40+75, width / 2 + i*20, 40+75-10);
        line(width / 2 - i*20, 40+75, width / 2 - i*20, 40+75-10);
    }

    // grote streepjes
    for (j = 0; j <= 1+aantal_fout_gebieden; j++) {
        line(width / 2 + j*marge*20, 40+75, width / 2 + j*marge*20, 40+75-20);
        line(width / 2 - j*marge*20, 40+75, width / 2 - j*marge*20, 40+75-20);
    }

    line(width / 2, 40+75, width / 2, 40+75-78);
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

    flesje_plus_drinken_gewicht = int(gewicht_input.value());
    streefgewicht = flesje_plus_drinken_gewicht - (dice_value + 1) * multiplier;
    streefgewicht_text.html('Streefgewicht is ' + streefgewicht + ' gram');
    // streefwaarde_precies.html(streefgewicht);

    for (i=0;i<=aantal_fout_gebieden+1;i++) {
        var waarde = streefgewicht + marge * i;
        gewicht_texten_rechts[i].html(waarde);
    }

    for (j=0;j<=aantal_fout_gebieden;j++) {
        var waarde = streefgewicht - marge * (j+1);
        gewicht_texten_links[j].html(waarde);
    }


    // console.log(flesje_plus_drinken_gewicht);
    // console.log(streefwaarde);
    // let streefgewicht_text = "Streefgewicht is " + streefwaarde + " gram";
    // fontSize(20);
    // text(streefgewicht_text, 250, 400);

}

function margePlus() {
    marge += 1;
    marge_text.html('Marge = ' + marge);
    clear();
    background(80);
    drawRuler()
}

function margeMin() {
    if (marge > 0) {
        marge -= 1;
    }
    marge_text.html('Marge = ' + marge);
    clear();
    background(80);
    drawRuler()
}

function multiplierPlus() {
    multiplier += 1;
    multiplier_text.html('Multiplier = ' + multiplier);
    clear();
    background(80);
    drawRuler()
}

function multiplierMin() {
    if (multiplier > 0) {
        multiplier -= 1;
    }
    multiplier_text.html('Multiplier = ' + multiplier);
    clear();
    background(80);
    drawRuler()
}

function aantal_fout_gebiedenPlus() {
    aantal_fout_gebieden += 1;
    aantal_fout_gebieden_text.html('Aantal fout gebieden = ' + aantal_fout_gebieden);
    clear();
    background(80);
    drawRuler()
}

function aantal_fout_gebiedenMin() {
    if (aantal_fout_gebieden > 0) {
        aantal_fout_gebieden -= 1;
    }
    aantal_fout_gebieden_text.html('Aantal fout gebieden = ' + aantal_fout_gebieden);

    clear();
    background(80);
    drawRuler()
}

function draw() {
  // put drawing code here
}
