import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2, "RAN: REBIRTH", {
        fontFamily: "Arial",
        fontSize: "42px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 55, "Game client initialized", {
        fontFamily: "Arial",
        fontSize: "18px",
        color: "#9ca3af",
      })
      .setOrigin(0.5);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#111827",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  scene: [BootScene],
};

new Phaser.Game(config);
