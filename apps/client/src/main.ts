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

import idleLeftAtlas1Json from "../../../assets/characters/swordsman/base/Idle/left/idle_left1.json?raw";
import idleLeftAtlas1Texture from "../../../assets/characters/swordsman/base/Idle/left/idle_left1.png?url";
import idleLeftAtlas2Json from "../../../assets/characters/swordsman/base/Idle/left/idle_left2.json?raw";
import idleLeftAtlas2Texture from "../../../assets/characters/swordsman/base/Idle/left/idle_left2.png?url";

import idleRightAtlas1Json from "../../../assets/characters/swordsman/base/Idle/right/idle_right1.json?raw";
import idleRightAtlas1Texture from "../../../assets/characters/swordsman/base/Idle/right/idle_right1.png?url";
import idleRightAtlas2Json from "../../../assets/characters/swordsman/base/Idle/right/idle_right2.json?raw";
import idleRightAtlas2Texture from "../../../assets/characters/swordsman/base/Idle/right/idle_right2.png?url";

import walkDownAtlas1Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_1.json?raw";
import walkDownAtlas1Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_1.png?url";
import walkDownAtlas2Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_2.json?raw";
import walkDownAtlas2Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_2.png?url";
import walkDownAtlas3Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_3.json?raw";
import walkDownAtlas3Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_3.png?url";
import walkDownAtlas4Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_4.json?raw";
import walkDownAtlas4Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_4.png?url";
import walkDownAtlas5Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_5.json?raw";
import walkDownAtlas5Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_5.png?url";
import walkDownAtlas6Json from "../../../assets/characters/swordsman/base/walk/down/walk_down_6.json?raw";
import walkDownAtlas6Texture from "../../../assets/characters/swordsman/base/walk/down/walk_down_6.png?url";

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


const idleLeftAtlases: {
  key: string;
  textureUrl: string;
  data: AsepriteAtlasData;
}[] = [
  {
    key: "swordsman-idle-left-01",
    textureUrl: idleLeftAtlas1Texture,
    data: JSON.parse(idleLeftAtlas1Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-left-02",
    textureUrl: idleLeftAtlas2Texture,
    data: JSON.parse(idleLeftAtlas2Json) as AsepriteAtlasData,
  },
];

const idleRightAtlases: {
  key: string;
  textureUrl: string;
  data: AsepriteAtlasData;
}[] = [
  {
    key: "swordsman-idle-right-01",
    textureUrl: idleRightAtlas1Texture,
    data: JSON.parse(idleRightAtlas1Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-idle-right-02",
    textureUrl: idleRightAtlas2Texture,
    data: JSON.parse(idleRightAtlas2Json) as AsepriteAtlasData,
  },
];

const walkDownAtlases: {
  key: string;
  textureUrl: string;
  data: AsepriteAtlasData;
}[] = [
  {
    key: "swordsman-walk-down-01",
    textureUrl: walkDownAtlas1Texture,
    data: JSON.parse(walkDownAtlas1Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-walk-down-02",
    textureUrl: walkDownAtlas2Texture,
    data: JSON.parse(walkDownAtlas2Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-walk-down-03",
    textureUrl: walkDownAtlas3Texture,
    data: JSON.parse(walkDownAtlas3Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-walk-down-04",
    textureUrl: walkDownAtlas4Texture,
    data: JSON.parse(walkDownAtlas4Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-walk-down-05",
    textureUrl: walkDownAtlas5Texture,
    data: JSON.parse(walkDownAtlas5Json) as AsepriteAtlasData,
  },
  {
    key: "swordsman-walk-down-06",
    textureUrl: walkDownAtlas6Texture,
    data: JSON.parse(walkDownAtlas6Json) as AsepriteAtlasData,
  },
];

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    for (const atlas of [...idleDownAtlases, ...idleUpAtlases, ...idleLeftAtlases, ...idleRightAtlases, ...walkDownAtlases]) {
      this.load.atlas(atlas.key, atlas.textureUrl, atlas.data);
    }
  }

  create() {
    const { width, height } = this.scale;

    const collectFrames = (
      atlases: { key: string; data: AsepriteAtlasData }[],
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
    const idleLeftFrames = collectFrames(idleLeftAtlases);
    const idleRightFrames = collectFrames(idleRightAtlases);
    const walkDownFrames = collectFrames(walkDownAtlases);

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

    if (idleLeftFrames.length !== 22) {
      throw new Error(
        `Expected 22 Swordsman idle-left frames, received ${idleLeftFrames.length}.`,
      );
    }

    if (idleRightFrames.length !== 22) {
      throw new Error(
        `Expected 22 Swordsman idle-right frames, received ${idleRightFrames.length}.`,
      );
    }

    if (walkDownFrames.length !== 89) {
      throw new Error(
        `Expected 89 Swordsman walk-down frames, received ${walkDownFrames.length}.`,
      );
    }

    const firstFrame = idleRightFrames[0];

    if (!firstFrame) {
      throw new Error("Swordsman idle-right animation has no frames.");
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

    this.anims.create({
      key: "swordsman-idle-left",
      frames: idleLeftFrames,
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "swordsman-idle-right",
      frames: idleRightFrames,
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "swordsman-walk-down",
      frames: walkDownFrames,
      frameRate: 25,
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

    const instructionText = this.add
      .text(width / 2, 62, "W / A / D: Change facing | Hold S: Walk Down | Current: Right", {
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
    swordsman.play("swordsman-idle-right");

    const keyboard = this.input.keyboard;

    if (!keyboard) {
      throw new Error("Keyboard input is unavailable.");
    }

    // Capture WASD so the browser does not scroll while testing controls.
    keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W, true);
    keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A, true);
    keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S, true);
    keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D, true);

    const playIdleDirection = (
      direction: "up" | "left" | "down" | "right",
    ) => {
      swordsman.play(`swordsman-idle-${direction}`);

      const frameCounts = {
        up: 33,
        left: 22,
        down: 50,
        right: 22,
      };

      instructionText.setText(
        `W / A / S / D: Change facing direction | Current: ${direction.toUpperCase()} | ${frameCounts[direction]} frames`,
      );
    };

    keyboard.on("keydown-W", () => playIdleDirection("up"));
    keyboard.on("keydown-A", () => playIdleDirection("left"));
    keyboard.on("keydown-D", () => playIdleDirection("right"));

    keyboard.on("keydown-S", () => {
      swordsman.play("swordsman-walk-down");
      instructionText.setText("W / A / D: Change facing | Hold S: Walk Down | Current: WALK DOWN | 89 frames | 25 FPS");
    });

    keyboard.on("keyup-S", () => {
      playIdleDirection("down");
    });
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
