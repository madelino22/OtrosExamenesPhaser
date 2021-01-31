export default class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key: "Bootloader" });
    }
    
    preload() {
        this.load.on("complete", () => {
         this.scene.start("main");
        });
    
        //para imagenes
        this.load.image("fondo", "./resources/fondo.png");
        this.load.image("suelo", "./resources/suelo.png");
        
    
        //para spritesheets, el 192 es el tamaño en pixeles
        this.load.spritesheet("dude", "./resources/corriendo.png", {
            frameWidth: 64,
            frameHeight: 64,
        });
    
    
        //para la música(tienen que ser.mp3 o .wav)
       //this.load.audio("nombreDado","ruta.mp3/wav");
    
    
    }
    
    //si se crea una animación hay qeu crearla aquí
    create(){
    
        //el star y end dicen cuantos frames tiene, el frameRate las veces que cambia por segundo
        //el repeat dice si se repite, si es -1 se repite infinito, si no n veces
        this.anims.create({
            key: "dudeAnim",
            frames: this.anims.generateFrameNumbers("dude", {
            start: 0,
            end: 20,
            }),
        frameRate: 4,
        repeat: -1,
        });
        
        }
    }