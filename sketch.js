var gameState = 0;
this.canvas;
var homeScreen;
var BG_Img;


function preload() {
  BG_Img=loadImage("BG.jpg");
}

function setup() {
  this.canvas=createCanvas(windowWidth-25,windowHeight-25);
  homeScreen =new HomeScreen();
  homeScreen.display();
}

function draw(){
  
 /*   if(gameState == 1){
      
      clear();
      game.play();
    }
    if(gameState == 2){
      game.end();
    }
*/}