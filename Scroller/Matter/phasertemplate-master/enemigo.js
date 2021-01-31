export default class Enemigo extends Phaser.Physics.Matter.Sprite{


    constructor(scene, x, y, nombre_img, vel, player, funct){
            super(scene.matter.world, x, y, nombre_img);
            scene.add.existing(this);
            this.setBody({
                height: 64,
                width: 64
            })
            
            this.body.ignoreGravity = true;
            this.setFixedRotation();
            this.setFrictionAir(0);

            this.vel = vel;
            this.player = player;
            this.funct = funct;
            
            this.sonido = this.scene.sound.add("golpe", {loop: false})

            this.body.setOnCollideWith(this.player.body, () => {
                this.sonido.play();
                this.scene.scene.pause()
                this.scene.scene.launch("pausa");

            })

            

        this.setVelocityX(-this.vel) 
            
    }



    preUpdate(t, dt){
        super.preUpdate(t,dt);

        if(this.x < 0){
            this.funct.apply(this.scene);
            this.destroy();
        }
    }
}