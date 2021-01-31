import Bola from "./bola.js"


export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }

  init(datos){
      this.gana = datos.gana;
  }


  create() {

    this.space = this.input.keyboard.addKey("SPACE");

    if(this.gana)this.choquesText = this.add.text(300,300, "Ganaste");
    else this.choquesText = this.add.text(300,300, "perdiste");
    

    this.space.on("down", () =>{
        console.log("espacio");

        this.scene.start("main");
        console.log(this)
    })

  }

  update(time, delta) {
   // this.choquesText.setText("Choques restantes " + this.choquerest);
   
  }
}