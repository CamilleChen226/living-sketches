let angle = 0;
let sound;
let Dogs = [];
let Clouds = [];
let Manta = [];

async function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  let dogs = [];
  for (let i = 1; i < 7; i++) {
    let filename = "images/Dog" + i + ".png";
    dogs.push(loadImage(filename));
  }
  Dogs = await Promise.all(dogs);

  let clouds = [];
  for (let i = 2; i < 7; i++) {
    let filename = "images/C" + i + ".png";
    clouds.push(loadImage(filename));
  }
  Clouds = await Promise.all(clouds);

  let manta = [];
  for (let i = 1; i < 7; i++) {
    let filename = "images/M" + i + ".png";
    manta.push(loadImage(filename));
  }
  Manta = await Promise.all(manta);

  sound = await loadSound(
    "sounds/854594__sergequadrado__the-best-day-ever-loop.mp3"
  );
}

function mousePressed() {
  sound.play();
}

function draw() {
  background(220);
  let dogX = mouseX - 125;
  let dogY = mouseY - 125;
  let cloudX = map(dogX, -125, 275, 275, -125);
  let cloudY = map(dogY, -125, 275, 275, -125);

  if (Dogs.length > 0) {
    let index = floor(frameCount / 15) % Dogs.length;
    image(Dogs[index], dogX, dogY, 250, 250);
  }
  if (Clouds.length > 0) {
    let index = floor(frameCount / 15) % Clouds.length;
    image(Clouds[index], cloudX, cloudY, 150, 150);
  }
  if (Manta.length > 0) {
    let index = floor(frameCount / 15) % Manta.length;
    angle = angle + 1;
    translate(width / 2, height / 2);
    rotate(angle);
    if (angle > 360) {
      angle = 0;
    }
    image(Manta[index], 0, 0, 250, 250);
  }
}
