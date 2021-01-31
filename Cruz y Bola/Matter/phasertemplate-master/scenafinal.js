

export default class EscenaFinal extends Phaser.Scene {
  constructor() {
    super({ key: "final" });
  }
 

  init(datos){
      this.gana = datos.gana;
  }

  create() {

    this.w = this.input.keyboard.addKey("W");

    this.w.on("down", () =>{
        this.scene.start("main");
    });
    
    if(this.gana){
        this.add.text(300,300, "Ganaste").setFontSize(80);
    }
    else{
        this.add.text(300,300, "Perdiste").setFontSize(80);
    }
 }
    
}


