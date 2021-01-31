export default class Bola extends Phaser.GameObjects.Arc{
    constructor(scene, x, y, radio, player, vidas, bolas, sonido){
        super(scene,x,y,radio, false, 0x6666ff );
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.bounce.x = 1; this.body.bounce.y = 1;
        this.body.isCircle = true;
        this.body.setVelocityY(Phaser.Math.Between(-75,75));
        this.body.setVelocityX(Phaser.Math.Between(-75,75));
        this.radio = radio;
        this.vidas = vidas;
        this.bolas = bolas;
        scene.physics.add.collider(this, scene.blockbounds)
        this.player = player;
        this.sonido = sonido;
        

    }


    preUpdate(time, deltatime){
        if(this.scene.physics.collide(this, this.player)){
            this.vidas--;
            if(this.vidas > 0){
            this.bola1 = new Bola(this.scene, this.x, this.y, this.radio/2, this.player, this.vidas, this.bolas, this.sonido);
            this.bola2 = new Bola(this.scene, this.x, this.y, this.radio/2, this.player, this.vidas, this.bolas, this.sonido);
            this.scene.bolas.push(this.bola1);
            this.scene.bolas.push(this.bola2);
            }

            if(this.sonido != undefined){
                this.sonido.apply(this.scene);
            } 
            this.destroy();


        }

    }

}