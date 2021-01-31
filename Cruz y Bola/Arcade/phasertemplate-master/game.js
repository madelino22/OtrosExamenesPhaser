import Bola from "./bola.js"


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {}

  create() {


   

    this.pared_arriba = this.add.rectangle(this.sys.game.canvas.width/2, 0, 600,50, 0x6666ff);
    this.physics.add.existing(this.pared_arriba);
    this.pared_arriba.body.immovable = true;
    this.pared_arriba.body.allowGravity = false;
    
    this.pared_abajo = this.add.rectangle(this.sys.game.canvas.width/2, this.sys.game.canvas.height, 600,50, 0x6666ff);
    this.physics.add.existing(this.pared_abajo);
    this.pared_abajo.body.immovable = true;
    this.pared_abajo.body.allowGravity = false;

    this.pared_izquierda = this.add.rectangle(0, this.sys.game.canvas.height/2, 50,600, 0x6666ff);
    this.physics.add.existing(this.pared_izquierda);
    this.pared_izquierda.body.immovable = true;
    this.pared_izquierda.body.allowGravity = false;

    this.pared_derecha = this.add.rectangle(this.sys.game.canvas.width, this.sys.game.canvas.height/2, 50,600, 0x6666ff);
    this.physics.add.existing(this.pared_derecha);
    this.pared_derecha.body.immovable = true;
    this.pared_derecha.body.allowGravity = false;

   this.player = this.physics.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "player_azul")
   this.player.play("cruzquietaanim") 

   this.bolas = [];
   this.bola_ini = new Bola(this, this.sys.game.canvas.width/2, this.sys.game.canvas.height/2 + 150, 60, this.player, 4, this.bolas, this.suena);
   this.bolas.push(this.bola_ini);

   this.blockbounds = [this.pared_arriba, this.pared_abajo, this.pared_izquierda, this.pared_derecha];

   this.physics.add.collider(this.bola_ini, this.blockbounds);
   this.physics.add.collider(this.bola_ini, this.player);
   this.physics.add.collider(this.blockbounds, this.player);
   this.physics.add.collider(this.bolas, this.bolas);
    this.timing = 5;
    this.timer = this.time.addEvent({
      delay: 1000,
      callback: () => {

        this.timing--;
        console.log(this.timing);
        if(this.timing < 0){
          this.scene.pause();
          this.scene.launch("menu", {gana: false})
        }
      },
      loop: true,
    })

  
    this.golpe = this.sound.add("golpe");




    //input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.quietoX = true;
    this.quietoY = true;
    this. moviendo = false;
    this.animquieto = true;
    this.animmov = false;



    this.tiempo = 30;
    this.choquerest = 15;
    this.choquesText = this.add.text(50,20, "Choques restantes " + this.chocquerest);

  }

  update(time, delta) {
    this.choquesText.setText("Choques restantes " + this.choquerest);
  this.vel = 150;
  if(this.cursors.up.isDown){
  this.player.setVelocityY(-this.vel)

  this.quietoX = false;
  this. moviendo = true;
  }
  else if(this.cursors.down.isDown){
    this.player.setVelocityY(this.vel)
    this.quietoX = false;
    this. moviendo = true;
  }
  else{
    this.player.setVelocityY(0)
  
    this.quietoX = true;
  }

   if(this.cursors.right.isDown){
     this.player.setVelocityX(this.vel)
 
     this.quietoY = false;
     this. moviendo = true;
   }
   else if(this.cursors.left.isDown){
    this.player.setVelocityX(-this.vel)


    this.quietoY = false;
    this. moviendo = true;
    }
   else{
     this.player.setVelocityX(0)
     this.quietoY = true;
    }


    if(this.quietoX && this.quietoY) this.moviendo = false;

    if(this.moviendo && !this.animmov){
      this.player.play("cruzmovanim");
      this.animmov = true;
    }
    else if(!this.moviendo && this.animmov){
      this.player.play("cruzquietaanim");
      this.animmov = false;
    }

   

  }


  suena(){
    this.golpe.play();
    this.choquerest--;


    if(this.choquerest < 1){
      this.scene.pause();
      this.scene.launch("menu", {gana: true});
    }
   
  }
}
