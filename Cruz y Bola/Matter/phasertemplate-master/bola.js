export default class Bola extends Phaser.Physics.Matter.Sprite{

constructor(scene, x, y, nombre_img, player, vidas, funct){
    super(scene.matter.world, x, y, nombre_img)
    scene.add.existing(this);
    this.setBody({
        type: "circle", 
        height: nombre_img.height,
        width: nombre_img.width,
        });

    this.setVelocityY(Phaser.Math.Between(-5,5));
    this.setVelocityX(Phaser.Math.Between(-5,5));
    this.setFixedRotation();
    //this.body.friction = 0;
    this.setFriction(0);
    this.setFrictionAir(0);
    //this.body.frictionAir = 0;  
    this.body.frictionStatic = 0;
    this.setBounce(1);
   
    this.displayHeight =vidas/3*this.height;
    this.displayWidth =vidas/3*this.width;
    this.funct = funct;

    console.log("vidas " + vidas);
    this.funct.apply(this.scene, [+1]);
    //console.log("creada bola")
   
    this.vidas = vidas;
    scene.time.delayedCall(1000, () =>{
        this.setOnCollideWith(player.body, () => {
            
            if(vidas > 1){
               
                this.bola1 = new Bola(scene, this.x, this.y, nombre_img, player, vidas - 1, this.funct);
                this.bola2 = new Bola(scene, this.x, this.y, nombre_img, player, vidas - 1, this.funct);
            }
            this.funct.apply(this.scene, [-1]);
            this.destroy();
        })
    })
    
}

preUpdate(t,d){
    super.preUpdate();

}

}