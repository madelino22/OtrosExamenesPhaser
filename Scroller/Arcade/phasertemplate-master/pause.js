import Player from "./player.js"
import Enemigo from "./enemigo.js"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "pause" });
  }
  preload() {}

  create() {
    
    this.time.delayedCall(2000, () => {
        console.log("hola");
        
        this.scene.stop();
        this.scene.start("main");
        // this.scene.stop("main")
        // this.scene.start("final");
    })
   
  }

  
  
}