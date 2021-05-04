var bg_image;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var game;
var allPlayers;
var car1, car2,car3,car4;
var cars;
var car1image,car2image,car3image,car4image;
var trackImage;

function preload(){
  car1image = loadImage("car1.png");
  car2image = loadImage("car2.png");
  car3image = loadImage("car3.png");
  car4image = loadImage("car4.png");
  trackImage = loadImage("track.jpg");
  bg_image = loadImage("ground.png");
}

function setup(){
  createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw(){
  
  
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play()
  }

  if (gameState === 2){
    game.end();
  }
}


