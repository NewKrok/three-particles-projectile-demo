import { fireEffect } from "./fire-effect-config";
import { iceEffect } from "./ice-effect-copy";
import { lightEffect } from "./light-effect-config";
import { rockEffect } from "./rock-effect-config";
import { waterEffect } from "./water-effect-config";

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
