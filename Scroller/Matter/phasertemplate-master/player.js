export default class Player extends Phaser.Physics.Matter.Sprite{


    constructor(scene, x, y, nombre_img, vel, suelo){
            super(scene.matter.world, x, y, nombre_img);
            scene.add.existing(this);
            this.setBody({
                height: 64,
                width: 64
            })

            this.setFixedRotation();
            this.play("corriendo_anim");

            this.vel = vel;
            this.suelo = suelo;
            this.saltando = false;
            this.sonido = this.scene.sound.add("golpe", {loop: false})

            this.body.setOnCollideWith(this.suelo, () => {
                if(this.saltando){
                    this.play("corriendo_anim")
                }
                this.saltando = false;
            })


            this.space = scene.input.keyboard.addKey("SPACE");
              this.space.on("down", ()=>{
                  if(!this.saltando){
                    this.sonido.play();
                    this.applyForce({x: 0, y:-this.vel})
                    this.play("saltando_anim");
                    this.saltando= true;
                  }
                

            }) 
    }



    preUpdate(t, dt){
        super.preUpdate(t,dt);
    }
}