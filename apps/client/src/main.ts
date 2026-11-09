import Phaser from "phaser";

import idleDownAtlas1Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down1.json?raw";
import idleDownAtlas1Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down1.png?url";
import idleDownAtlas2Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down2.json?raw";
import idleDownAtlas2Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down2.png?url";
import idleDownAtlas3Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down3.json?raw";
import idleDownAtlas3Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down3.png?url";
import idleDownAtlas4Json from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down4.json?raw";
import idleDownAtlas4Texture from "../../../assets/characters/swordsman/base/Idle/down/swordsman_idle_down4.png?url";

import idleUpAtlas1Json from "../../../assets/characters/swordsman/base/Idle/up/Idle_up1.json?raw";
import idleUpAtlas1Texture from "../../../assets/characters/swordsman/base/Idle/up/Idle_up1.png?url";
import idleUpAtlas2Json from "../../../assets/characters/swordsman/base/Idle/up/Idle_up2.json?raw";
import idleUpAtlas2Texture from "../../../assets/characters/swordsman/base/Idle/up/Idle_up2.png?url";
import idleUpAtlas3Json from "../../../assets/characters/swordsman/base/Idle/up/Idle_up3.json?raw";
import idleUpAtlas3Texture from "../../../assets/characters/swordsman/base/Idle/up/Idle_up3.png?url";

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

const idleUpAtlases: {
  key: string;
  textureUrl: string;
  data: AsepriteAtlasData;
}[] = [
  {
    key: "swordsman-idle-up-01",
    textureUrl: idleUpAtlas1Texture,
    data: JSON.parse(idleUpAtlas1Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-up-02",
    textureUrl: idleUpAtlas2Texture,
    data: JSON.parse(idleUpAtlas2Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-up-03",
    textureUrl: idleUpAtlas3Texture,
    data: JSON.parse(idleUpAtlas3Json) as AsepriteAtlasData,
  },
];

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    for (const atlas of [...idleDownAtlases, ...idleUpAtlases]) {
      this.load.atlas(atlas.key, atlas.textureUrl, atlas.data);
    }
  }

  create() {
    const { width, height } = this.scale;

    const collectFrames = (
      atlases: typeof idleDownAtlases,
    ): { key: string; frame: string }[] => {
      const frames: { key: string; frame: string }[] = [];

      for (const atlas of atlases) {
        for (const frameName of Object.keys(atlas.data.frames)) {
          frames.push({ key: atlas.key, frame: frameName });
        }
      }

      return frames;
    };

    const idleDownFrames = collectFrames(idleDownAtlases);
    const idleUpFrames = collectFrames(idleUpAtlases);

    if (idleDownFrames.length !== 50) {
      throw new Error(
        `Expected 50 Swordsman idle-down frames, received ${idleDownFrames.length}.`,
      );
    }

    if (idleUpFrames.length !== 33) {
      throw new Error(
        `Expected 33 Swordsman idle-up frames, received ${idleUpFrames.length}.`,
      );
    }

    const firstFrame = idleUpFrames[0];

    if (!firstFrame) {
      throw new Error("Swordsman idle-up animation has no frames.");
    }

    this.anims.create({
      key: "swordsman-idle-down",
      frames: idleDownFrames,
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "swordsman-idle-up",
      frames: idleUpFrames,
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
      .text(width / 2, 62, "Swordsman | Idle Up | 33 frames | 10 FPS", {
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

    swordsman.setScale(0.2);
    swordsman.play("swordsman-idle-up");
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
