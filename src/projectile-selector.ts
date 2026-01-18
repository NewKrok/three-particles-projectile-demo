import { fireEffect } from "./effect-config/fire-effect-config";
import { iceEffect } from "./effect-config/ice-effect-copy";
import { lightEffect } from "./effect-config/light-effect-config";
import { rockEffect } from "./effect-config/rock-effect-config";
import { waterEffect } from "./effect-config/water-effect-config";
import { natureEffect } from "./effect-config/nature-effect-config";
import { darknessEffect } from "./effect-config/darkness-effect-config";
import { smokeEffect } from "./effect-config/smoke-effect-config";
import { rainbowEffect } from "./effect-config/rainbow-effect-config";

export enum ProjectileType {
  FIRE,
  LIGHT,
  ICE,
  ROCK,
  WATER,
  NATURE,
  DARKNESS,
  SMOKE,
  RAINBOW,
}

const typeMap = {
  [ProjectileType.FIRE]: fireEffect,
  [ProjectileType.LIGHT]: lightEffect,
  [ProjectileType.ICE]: iceEffect,
  [ProjectileType.ROCK]: rockEffect,
  [ProjectileType.WATER]: waterEffect,
  [ProjectileType.NATURE]: natureEffect,
  [ProjectileType.DARKNESS]: darknessEffect,
  [ProjectileType.SMOKE]: smokeEffect,
  [ProjectileType.RAINBOW]: rainbowEffect,
};

const activeType = ProjectileType.FIRE;
let activeConfig = typeMap[activeType];

export const getActiveConfig = () => activeConfig;
export const setActiveConfigByType = (type: ProjectileType) =>
  (activeConfig = typeMap[type]);
