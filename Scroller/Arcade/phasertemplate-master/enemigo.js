export default class Enemigo extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, nombre_sprite, player, velocidad, funct){
        super(scene, x, y, nombre_sprite);

        scene.add.existing(this)
        scene.physics.world.enable(this);
        this.body.setAllowGravity(false);

        this.player = player;
        this.velocidad = velocidad;
        this.funct = funct;

        console.log("hola");
        


        this.scene.physics.add.overlap(this, this.player, () => {
            console.log("enemigotocaplayer");
            this.scene.scene.launch("pause");
            this.scene.scene.pause();
        })

       


    }


    preUpdate(t, dT){

        super.preUpdate(t,dT);
        this.body.setVelocityX(-this.velocidad);
        if(this.x < 0){
            console.log("me elimino");
            if(this.funct != undefined)
            this.funct.apply(this.scene);
            this.destroy();
           
        }
        
    }

    

}