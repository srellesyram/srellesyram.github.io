let mySound

function draw() {
  image(img1, mouseX, mouseY, 50, 50);
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound0 = loadSound('rain.mp3');
  mySound = loadSound('drip.mp3');
  img0 = loadImage('white.png')
  img1 = loadImage('drop1.png')
  img2 = loadImage('drop2.png')
  img3 = loadImage('drop3.png')
  img4 = loadImage('drop4.png')
  img5 = loadImage('drop5.png')
  img7 = loadImage('drop7.png')
  img8 = loadImage('drop8.png')
  img9 = loadImage('drop9.png')
  img10 = loadImage('drop10.png')
  img11 = loadImage('drop11.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound0.loop();
  mySound0.setVolume(0.2);
  noCursor();
}

function mousePressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
  image(img0, 0, 0, windowWidth, windowHeight);
}

function keyTyped() {
  if (key === '1') {
    image(img2, mouseX-100, mouseY-100, 200, 200);
  } else if (key === '2') {
    image(img3, mouseX-200, mouseY-130, 400, 250);
  } else if (key === '3') {
    image(img4, mouseX-300, mouseY-250, 400, 500);
  } else if (key === '4') {
    image(img5, mouseX-230, mouseY-260, 400, 500);
  } else if (key === '5') {
    image(img8, mouseX-500, mouseY-500, 1200, 1000);
  } else if (key === '6') {
    image(img9, mouseX-300, mouseY-300, 600, 600);
  } else if (key === '7') {
    image(img10, 0, 0, windowWidth, windowHeight);
  } else if (key === '8') {
    image(img11, mouseX-300, mouseY-250, 700, 500);
  }
}