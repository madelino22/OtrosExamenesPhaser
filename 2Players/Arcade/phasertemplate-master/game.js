
import Player from "./player.js"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }

  create() {
    this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "fondo");
    this.suelo = this.physics.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2+ 150, "suelo");
    
    console.log(this.suelo)
    this.suelo.body.setImmovable(true);
    this.suelo.body.setAllowGravity(false);
    this.suelo.body.allowDrag = false;

    this.cursors1 = this.input.keyboard.createCursorKeys();
    this.cursors1 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    })
    this.cursors2 = this.input.keyboard.createCursorKeys();
    this.cursors2 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.I,
      left: Phaser.Input.Keyboard.KeyCodes.J,
      right: Phaser.Input.Keyboard.KeyCodes.L,
    })

    this.players = this.physics.add.group();
    this.player1 = new Player(this, 200, 100, 10, this.cursors1, this.suelo, this.players);
    this.player2 = new Player(this, 600, 100, 5, this.cursors2, this.suelo, this.players);
    this.physics.add.collider(this.players, this.players, (obj1, obj2) => {
      obj1.choca();
      obj2.choca();
    });
    
    this.textiVidas1 = this.add.text(100, 50, "Vidas1: ");
    this.textiVidas2 = this.add.text(400, 50, "Vidas2: ");
  }

  update(time, delta) {


    this.textiVidas1.setText("Vidas1: " + this.player1.vidas);
    this.textiVidas2.setText("Vidas1: " + this.player2.vidas);
    if(this.physics.collide(this.player1, this.suelo, () =>{ console.log("cocaroooooooon")})){
      console.log("cocaroooooooon")
  }


  }
}
