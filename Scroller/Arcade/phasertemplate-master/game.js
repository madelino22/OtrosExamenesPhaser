import Player from "./player.js"
import Enemigo from "./enemigo.js"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {}

  create() {
    
    
    this.background = this.add.tileSprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2,this.sys.game.canvas.width, this.sys.game.canvas.height, "background");
    


   

    this.sueloGroup = this.physics.add.staticGroup();

    this.suelo = this.add.tileSprite(this.sys.game.canvas.width/2, 500, this.sys.game.canvas.width, 50, "suelo");
    this.physics.world.enable(this.suelo);
    this.physics.add.existing(this.suelo);
    this.suelo.body.setAllowGravity(false);
    this.suelo.body.immovable= true;

    this.sueloGroup.add(this.suelo);

    this.player = new Player(this, 150,400, "corriendo", this.suelo);

    this.obstaculos = 5;
    this.time.addEvent({
      delay: 2000, 
      callback: () => {
        console.log(this)
        new Enemigo(this, 400, Phaser.Math.Between(300, 400, "obstaculo", this.player, 100, this.restarObstaculos))
        this.enemigo = new Enemigo(this, 400, Phaser.Math.Between(300, 400), "obstaculo", this.player, 100,this.restarObstaculos);
      },
      callbackScope: this,
      repeat: this.obstaculos-1,
    })

  

    // this.suelo = this.add.zone(400, 450);
    // this.suelo.setSize(800,30);

    // this.physics.world.enable(this.suelo);
    // this.physics.add.existing(this.suelo);
    // this.suelo.body.setAllowGravity(false);
    // this.suelo.body.immovable= true;

    // this.physics.add.collider(this.player, this.suelo)
   
  }

  update(time, delta) {

    this.background.tilePositionX += 0.5;
    this.suelo.tilePositionX += 0.6;
 
    if(this.physics.collide(this.player, this.suelo)){
      console.log("chocaron");
    }


  }

  restarObstaculos(){
    this.obstaculos--;
    if(this.obstaculos <= 0){
      this.scene.start("final");
    }
  }

  tocaSuelo(){
    console.log("tocasuelo");
  }
}


