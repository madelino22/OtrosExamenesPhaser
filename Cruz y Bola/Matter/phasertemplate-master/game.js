import Bola from "./bola.js"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
 

  create() {


    this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "fondo")
    this.player = this.matter.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "cruz_azul");
    this.player.setFixedRotation();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.vel = 5;



    //bordes del mapa:
    this.muroArriba = this.matter.add.rectangle(this.sys.game.canvas.width/2, 0, this.sys.game.canvas.width, 20, false, new Phaser.Display.Color(0, 0, 0));
    this.muroArriba.isStatic = true;

    this.muroAbajo = this.matter.add.rectangle(this.sys.game.canvas.width/2, this.sys.game.canvas.height, this.sys.game.canvas.width, 20, 0x6666ff);
    this.muroAbajo.isStatic = true;

    this.muroIzquierda = this.matter.add.rectangle(0, this.sys.game.canvas.height/2, 20, this.sys.game.canvas.height, 0x6666ff);
    this.muroIzquierda.isStatic = true;

    this.muroDerecha = this.matter.add.rectangle(this.sys.game.canvas.width, this.sys.game.canvas.height/2, 20, this.sys.game.canvas.height, 0xff0000 );
    this.muroDerecha.isStatic = true;

    this.nBolas = 0;
    this.bola_ini = new Bola(this, this.sys.game.canvas.width/2 + 100, this.sys.game.canvas.height/2, "bola", this.player, 3, this.actualizarBolas)
    this.timerTime =30;
    this.tiempo = this.add.text(300,300, "Ganaste");
    this.tiempo.setFontSize(80);

    this.timer = this.time.addEvent({
      delay: 1000,                // ms
      callback: () => {
        this.timerTime--;
        if(this.timerTime <= 0){
         
          this.scene.launch("final" , {ganar:false})
          this.scene.pause();
          this.timer.destroy();
         
        }
        
       
      },
      repeat: this.timerTime -1
  });
  }



  actualizarBolas(bolas){
    this.nBolas += bolas;
    console.log(this.nBolas);
    if(this.nBolas <= 0){
      this.scene.launch("final", {ganar: true});
      this.scene.pause();
    }
  }
  update(time, delta) {

    this.tiempo.setText(this.timerTime);
    //moviemiento del player
    if(this.cursors.up.isDown){
      this.player.setVelocityY(-this.vel);
    }
    else if(this.cursors.down.isDown){
      this.player.setVelocityY(this.vel);
    }
    else{
      this.player.setVelocityY(0);
    }



    if(this.cursors.left.isDown){
      this.player.setVelocityX(-this.vel);
    }
    else if(this.cursors.right.isDown){
      this.player.setVelocityX(this.vel);
    }
    else{
      this.player.setVelocityX(0);
    }
  }
}
