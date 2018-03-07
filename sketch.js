var drawScene = {
  "startScreen" : drawStartScreen,
  "inGame" : drawInGame
}

var handlePresses = {
  "startScreen" : mousePressedStartScreen,
  "inGame" : mousePressedInGame
}

var canvasSize = {width : 500, height: 500};

var currentScene = "startScreen";

function setup() {
  createCanvas(canvasSize.width, canvasSize.height);
}

function draw() {
  drawScene[currentScene]();
}

function mousePressed(){
  handlePresses[currentScene]();
}

function drawInGame () {
  background("darkred");
}

function drawStartScreen (){
  background("lightBlue");
}

function mousePressedInGame(){
  currentScene = "startScreen";
}

function mousePressedStartScreen(){
  currentScene = "inGame";
}

