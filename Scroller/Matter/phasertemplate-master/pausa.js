
export default class Pausa extends Phaser.Scene {
    constructor() {
      super({ key: "pausa" });
    }
  
    create() {
        
        this.time.delayedCall(2000, () => {this.scene.start("main");})
      
      
    }
  
  
    
  
  }