import Game from "./game.js";
import Bootloader from "./bootloader.js";
import Pause from "./pause.js";
import Final from "./final.js";

      var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        pixelArt: true,
        input: {
          gamepad: true,
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: [Bootloader,Game, Pause, Final],
        physics: {
          default: "arcade",
          arcade: { gravity: { y: 400 }, debug: true },
        },
      };
      new Phaser.Game(config);