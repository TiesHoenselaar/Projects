var red_dice_checkbox;
var yellow_dice_checkbox;
var purple_dice_checkbox;
var roll_dice_button;

var total = 1;

function setup() {
  createCanvas(450, 270);
  background(220);
  textSize(20);
  red_dice_checkbox = createCheckbox('Red dice', true);
  red_dice_checkbox.position(10,20);
  yellow_dice_checkbox = createCheckbox('Yellow dice', true);
  yellow_dice_checkbox.position(10,40);
  purple_dice_checkbox = createCheckbox('Purple dice', true);
  purple_dice_checkbox.position(10,60);

  roll_dice_button = createButton('Roll dice');
  roll_dice_button.position(180, 20);
  roll_dice_button.mousePressed(roll_dice);

  red_dice_images = [];
  yellow_dice_images = [];
  purple_dice_images = [];

  for (let i = 0; i < 7; i++) {
      let img_path = "img/dice_" + i + ".png";
      red_dice_images.push(loadImage("img/red_dice_" + i + ".png"));
      yellow_dice_images.push(loadImage("img/yellow_dice_" + i + ".png"));
      purple_dice_images.push(loadImage("img/purple_dice_" + i + ".png"));
  }
}

function draw() {
  show_dice();
}

function show_dice() {

  if (total) {
    text("Total: " + total, 10, 250);
  }
}
function roll_dice() {

  var rolls = [1,2,3,4,5,6];
  var red_number = 0;
  var yellow_number = 0;
  var purple_number = 0;
  total = 0;

  if (red_dice_checkbox.checked()) {
    red_number = random(rolls);
    total += red_number;

    // text("Red: " + red_number, 10, 130);
  }
  if (yellow_dice_checkbox.checked()) {
    yellow_number = random(rolls);
    total += yellow_number;

    // text("Yellow: " + yellow_number, 10, 150);
  }
  if (purple_dice_checkbox.checked()) {
    purple_number = random(rolls);
    total += purple_number;

    // text("Purple: " + purple_number, 10, 170);
  }
  image(red_dice_images[red_number], 10, 100);
  image(yellow_dice_images[yellow_number], 160, 100);
  image(purple_dice_images[purple_number], 310, 100);
  // text("Total: " + total, 10, 250);

  // show_dice()

}
