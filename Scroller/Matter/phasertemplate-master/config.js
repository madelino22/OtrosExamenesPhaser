import Game from "./game.js";
import Bootloader from "./bootloader.js";
import Final from "./final.js";
import Pausa from "./pausa.js";

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
  scene: [Bootloader, Game, Final, Pausa],
  physics: {
    default: "matter",
    matter: { gravity: { y: 1 }, debug: true },
  },
};
new Phaser.Game(config);