export default class Bootloader extends Phaser.Scene {
    constructor() {
    super({ key: "Bootloader" });
    }
    
    preload() {
    this.load.on("complete", () => {
    this.scene.start("main");
    });
    
    //para imagenes
    this.load.image("player_azul", "./resources/cruz_azul.png");
    this.load.audio("golpe",  "./resources/golpe.wav")
    
    
    //para spritesheets, el 192 es el tamaño en pixeles
    this.load.spritesheet("cruzquieta", "./resources/cruzquieta.png", {
    frameWidth: 75,
    frameHeight: 75,
    });

     //para spritesheets, el 192 es el tamaño en pixeles
     this.load.spritesheet("cruzmov", "./resources/cruzmoviendose.png", {
        frameWidth: 75,
        frameHeight: 75,
        });
        
    
    
    //para la música(tienen que ser.mp3 o .wav)
   // this.load.audio("nombreDado","ruta.mp3/wav");
    
    console.log(this.sound)
    }
    
    //si se crea una animación hay qeu crearla aquí
    create(){
    
    //el star y end dicen cuantos frames tiene, el frameRate las veces que cambia por segundo
    //el repeat dice si se repite, si es -1 se repite infinito, si no n veces
    this.anims.create({
    key: "cruzquietaanim",
    frames: this.anims.generateFrameNumbers("cruzquieta", {
    start: 0,
    end: 2,
    }),
    frameRate: 4,
    repeat: -1,
    });

    this.anims.create({
        key: "cruzmovanim",
        frames: this.anims.generateFrameNumbers("cruzmov", {
        start: 0,
        end: 2,
        }),
        frameRate: 4,
        repeat: -1,
        });
    
    }





    

}