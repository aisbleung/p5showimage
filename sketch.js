var img;

function setup() {

  // create canvas
  createCanvas(710, 400);
 
  // sound and image test
  img = loadImage("https://drive.google.com/open?id=0B6L0s0klUfWMUjRPaWwtZ1doTUE");

}

function draw() {
  background(0,125,125);

  image(img,0,0);

}
