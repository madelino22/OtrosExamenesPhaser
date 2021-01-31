import Game from "./game.js";
import Bootloader from "./bootloader.js"
import EscenaFinal from "./scenafinal.js"

      var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 800,
        pixelArt: true,
        input: {
          gamepad: true,
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: [Bootloader, Game, EscenaFinal],
        physics: {
          default: "matter",
          matter: { gravity: { y: 0, x:0 }, debug: true },
        },
      };
      new Phaser.Game(config);