import Player from "./player.js"
import Enemigo from "./enemigo.js"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }

  create() {

    this.fondo = this.add.tileSprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2,  this.sys.game.canvas.width, this.sys.game.canvas.height,"fondo");
    this.suelo = this.add.tileSprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2+ 150,  this.sys.game.canvas.width, 50,"suelo");
    this.sueloRigido = this.matter.add.rectangle(this.suelo.x, this.suelo.y, this.suelo.width, this.suelo.height );
    this.sueloRigido.isStatic = true;
    console.log(this.suelo)

    this.player = new Player(this, 100, this.sys.game.canvas.height/2, "player", 0.2, this.sueloRigido);
    
    this.obstaculos = 5;
    this.creaObstaculos(this.obstaculos-1);

    console.log(this.enemigo);
    
  }


  creaObstaculos(restantes){

    this.enemigo = new Enemigo(this, 500, Phaser.Math.Between(300, 400), "obstaculo", 4, this.player, this.oneLess);
    if(restantes>0){
      this.time.delayedCall(Phaser.Math.Between(2000, 4000), this.creaObstaculos, [restantes-1], this);
    }
    

  }

  oneLess(){
    this.obstaculos--;
    if(this.obstaculos <= 0){
      this.scene.start("final");
    }
  }
  update(time, delta) {

    this.fondo.tilePositionX += 0.5;
    this.suelo.tilePositionX += 0.7;
  }

}
