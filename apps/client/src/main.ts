import Phaser from "phaser";

import idleDownAtlas1Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down1.json?raw";
import idleDownAtlas1Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down1.png?url";
import idleDownAtlas2Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down2.json?raw";
import idleDownAtlas2Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down2.png?url";
import idleDownAtlas3Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down3.json?raw";
import idleDownAtlas3Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down3.png?url";
import idleDownAtlas4Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down4.json?raw";
import idleDownAtlas4Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down4.png?url";

type AsepriteAtlasData = {
  frames: Record<string, unknown>;
};

const idleDownAtlases: {
  key: string;
  textureUrl: string;
  data: AsepriteAtlasData;
}[] = [
  {
    key: "swordsman-idle-down-01",
    textureUrl: idleDownAtlas1Texture,
    data: JSON.parse(idleDownAtlas1Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-down-02",
    textureUrl: idleDownAtlas2Texture,
    data: JSON.parse(idleDownAtlas2Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-down-03",
    textureUrl: idleDownAtlas3Texture,
    data: JSON.parse(idleDownAtlas3Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-down-04",
    textureUrl: idleDownAtlas4Texture,
    data: JSON.parse(idleDownAtlas4Json) as AsepriteAtlasData,
  },
];

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    for (const atlas of idleDownAtlases) {
      this.load.atlas(atlas.key, atlas.textureUrl, atlas.data);
    }
  }

  create() {
    const { width, height } = this.scale;

    const animationFrames: { key: string; frame: string }[] = [];

    for (const atlas of idleDownAtlases) {
      for (const frameName of Object.keys(atlas.data.frames)) {
        animationFrames.push({
          key: atlas.key,
          frame: frameName,
        });
      }
    }

    if (animationFrames.length !== 50) {
      throw new Error(
        `Expected 50 Swordsman idle-down frames, received ${animationFrames.length}.`,
      );
    }

    const firstFrame = animationFrames[0];

    if (!firstFrame) {
      throw new Error("Swordsman idle-down animation has no frames.");
    }

    this.anims.create({
      key: "swordsman-idle-down",
      frames: animationFrames,
      frameRate: 10,
      repeat: -1,
    });

    this.add
      .text(width / 2, 24, "RAN: REBIRTH", {
        fontFamily: "Arial",
        fontSize: "28px",
        color: "#ffffff",
        fontStyle: "bold",
      })
      .setOrigin(0.5, 0);

    this.add
      .text(width / 2, 62, "Swordsman | Idle Down | 50 frames | 10 FPS", {
        fontFamily: "Arial",
        fontSize: "14px",
        color: "#9ca3af",
      })
      .setOrigin(0.5, 0);

    const swordsman = this.add.sprite(
      width / 2,
      height / 2,
      firstFrame.key,
      firstFrame.frame,
    );

    swordsman.setScale(0.3);
    swordsman.play("swordsman-idle-down");
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
