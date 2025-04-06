import { fireEffect } from "./effect-config/fire-effect-config";
import { iceEffect } from "./effect-config/ice-effect-copy";
import { lightEffect } from "./effect-config/light-effect-config";
import { rockEffect } from "./effect-config/rock-effect-config";
import { waterEffect } from "./effect-config/water-effect-config";

export enum ProjectileType {
  FIRE,
  LIGHT,
  ICE,
  ROCK,
  WATER,
}

const typeMap = {
  [ProjectileType.FIRE]: fireEffect,
  [ProjectileType.LIGHT]: lightEffect,
  [ProjectileType.ICE]: iceEffect,
  [ProjectileType.ROCK]: rockEffect,
  [ProjectileType.WATER]: waterEffect,
};

const activeType = ProjectileType.FIRE;
let activeConfig = typeMap[activeType];

export const getActiveConfig = () => activeConfig;
export const setActiveConfigByType = (type: ProjectileType) =>
  (activeConfig = typeMap[type]);
