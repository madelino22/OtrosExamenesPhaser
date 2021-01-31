import Game from "./game.js";
import Bootloader from "./bootloader.js"
import Menu from "./menuvictoria.js"

      let config = {
        type: Phaser.AUTO,
        width: 600,
        height: 600,
        pixelArt: true,
        input: {
          gamepad: true,
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: [Bootloader, Game, Menu],
        physics: {
          default: "arcade",
          arcade: { gravity: { y: 0 }, debug: true },
        },
      };
      new Phaser.Game(config);