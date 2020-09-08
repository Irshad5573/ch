class HomeScreen {


  constructor() {
    this.button = createButton('Play');
 }

  hide(){
    this.button.hide();
  }

  display(){

    image(BG_Img,windowWidth-1600,windowHeight-800,windowWidth,windowHeight);

    
  this.button.position(windowWidth/2 + 20, windowHeight/2);
  
      this.button.mousePressed(()=>{  
        gameState=1;
      });

      

    drawSprites();
  }
  
    
}