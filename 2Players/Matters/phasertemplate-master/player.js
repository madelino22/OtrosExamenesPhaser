export default class Prop extends Phaser.Physics.Matter.Sprite{

    constructor(scene,x,y, vidas, cursores, suelo, players){
        super(scene.matter.world,x,y, "dude");
        this.vidas = vidas;
        this.cursores = cursores;
        this.suelo = suelo;
        this.players = players;

        scene.add.existing(this);

        this.saltando = false;
        
        this.setOnCollideWith(this.suelo, () => {
            this.saltando = false;
        });

       
        

        this.play("dude_anim");
        this.fuerzaSalto = 200;
        this.fuerzaMov = 80;


        this.derecha = true;
        this.players.push(this);
        console.log(this)
        this.setBounce(1);
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
            this.setVelocityY(-this.fuerzaSalto );
            console.log("salto")
            console.log(this.players)
            
        }

    

        if(!this.haChocado && this.cursores.right.isDown){
            this.setVelocityX(this.fuerzaMov);
            this.flipX = false;
        }
        else if(!this.haChocado && this.cursores.left.isDown){
            this.setVelocityX(-this.fuerzaMov);
            this.flipX = true;
        }
        else if(!this.haChocado){
            this.setVelocityX(0);
        }
    }

}