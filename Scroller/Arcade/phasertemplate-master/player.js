export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, nombre_sprite, suelo){
        super(scene, x, y, nombre_sprite);

        scene.add.existing(this)
        scene.physics.world.enable(this);
        this.play("corriendo_anim");
        this.keyboard = this.scene.input.keyboard.addKey("SPACE");
        this.suelo = suelo;
        this.salta = true;
        this.saltando = false;


        this.sonido = this.scene.sound.add("saltoaud", {mute: false, volume:0.4, loop: false});

        this.keyboard.on("down", () => {
            console.log("pulsoteclas");
            if(this.salta){
                this.saltando = true;
                this.sonido.play();
                console.log("salto");
                this.play("saltando_anim");
                this.body.setVelocityY(-500);
                this.salta = false;
            }
        })


        console.log(this.suelo)
        this.scene.physics.add.collider(this, this.suelo, () => {
            this.salta = true;
            if(this.saltando){
                this.play("corriendo_anim");
            }
            this.saltando = false;
        })


    }


    preUpdate(t, dT){

        super.preUpdate(t,dT);
        if(this.body.onFloor()) console.log("hola")

        
    }

    

}