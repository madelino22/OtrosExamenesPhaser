

export default class Final extends Phaser.Scene {
  constructor() {
    super({ key: "final" });
  }

  create() {

    this.text = this.add.text(300, 300, "Ganaste");
    
  }


  

}
