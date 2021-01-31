export default class Game extends Phaser.Scene {
    constructor() {
      super({ key: "final" });
    }
    preload() {}
  
    create() {
      
      this.text = this.add.text(400,300, "Perdiste");
      this.text.setFontSize(80);
        
     
    }
  
    
    
  }