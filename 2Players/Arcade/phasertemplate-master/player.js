export default class Prop extends Phaser.GameObjects.Sprite{

    constructor(scene,x,y, vidas, cursores, suelo, players){
        super(scene,x,y, "dude");
        this.vidas = vidas;
        this.cursores = cursores;
        this.suelo = suelo;
        this.players = players;

        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.saltando = false;
        this.scene.physics.add.collider(this, this.suelo, () => {
            this.saltando = false;
        })

        this.play("dude_anim");
        this.fuerzaSalto = 200;
        this.fuerzaMov = 80;


        this.derecha = true;
        this.players.add(this);
        console.log(this)
        this.body.bounce.x = 1
        this.body.bounce.y = 0.2;
        this.haChocado = false;

    }

    choca(){
        this.vidas--;
        console.log(this.vidas);
        this.haChocado = true;
        this.scene.time.delayedCall(1000, () => {this.haChocado = false;})
    }

    preUpdate(t,dt){
        super.preUpdate(t,dt);
        if(this.cursores.up.isDown && !this.saltando){
            this.saltando = true;
            this.body.setVelocityY(-this.fuerzaSalto );
            console.log("salto")
            console.log(this.players)
            
        }

        if(this.scene.physics.collide(this.body, this.suelo)){
            console.log("cocaroooooooon")
        }

        if(!this.haChocado && this.cursores.right.isDown){
            this.body.setVelocityX(this.fuerzaMov);
            this.flipX = false;
        }
        else if(!this.haChocado && this.cursores.left.isDown){
            this.body.setVelocityX(-this.fuerzaMov);
            this.flipX = true;
        }
        else if(!this.haChocado){
            this.body.setVelocityX(0);
        }
    }

}