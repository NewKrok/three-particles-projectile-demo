//@ts-nocheck

import { EffectConfig } from "./types";
import { ParticleSystemConfig } from "@newkrok/three-particles";

const init: ParticleSystemConfig = {
  transform: { rotation: { x: -90 } },
  duration: 0.5,
  looping: false,
  startLifetime: { min: 0.5, max: 0.8 },
  startSpeed: { min: 0.4, max: 0.66 },
  startSize: { min: 4, max: 11.34 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: {
      r: 0.5450980392156862,
      g: 0.3568627450980392,
      b: 0.3568627450980392,
    },
    max: {
      r: 0.5176470588235295,
      g: 0.5019607843137255,
      b: 0.44313725490196076,
    },
  },
  maxParticles: 15,
  emission: { rateOverTime: 200 },
  shape: { sphere: { radius: 0.4, arc: 180 }, cone: { angle: 0, radius: 0.1 } },
  renderer: { blending: "THREE.NormalBlending" },
  sizeOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.3666, y: 0.8566 },
      { x: 0.5333, y: 0.6899, percentage: 0.5333 },
      { x: 0.6999, y: 0.5232 },
      { x: 0.8333, y: 0.5914 },
      { x: 1, y: 0.425, percentage: 1 },
    ],
  },
  opacityOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.3333, y: 0.6666 },
      { x: 0.5, y: 0.5, percentage: 0.5 },
      { x: 0.6666, y: 0.3332 },
      { x: 0.8333, y: 0.1665 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  rotationOverLifetime: { min: -22.4, max: 24.3 },
  noise: { strength: 0.09, positionAmount: 0.191 },
  _editorData: {
    textureId: "CLOUD",
    simulation: {
      movements: "DISABLED",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
    showLocalAxes: false,
    showWorldAxes: false,
    frustumCulled: true,
    terrain: {
      textureId: "WIREFRAME",
      movements: "DISABLED",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
  },
};

const movement: ParticleSystemConfig = {
  startLifetime: { min: 0.67, max: 1.49 },
  startSpeed: { min: 0.11, max: 0.39 },
  startSize: { min: 0.37, max: 4.03 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: { r: 0.43529411764705883, g: 0.403921568627451, b: 0.403921568627451 },
    max: {
      r: 0.25882352941176473,
      g: 0.24313725490196078,
      b: 0.24313725490196078,
    },
  },
  gravity: 0.76,
  simulationSpace: "WORLD",
  maxParticles: 50,
  emission: { rateOverTime: 0, rateOverDistance: 10 },
  shape: { sphere: { radius: 0.119 } },
  sizeOverLifetime: {
    bezierPoints: [
      { x: 0, y: 0, percentage: 0 },
      { x: 1, y: 1, percentage: 1 },
    ],
  },
  opacityOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.3333, y: 0.6666 },
      { x: 0.5, y: 0.5, percentage: 0.5 },
      { x: 0.6666, y: 0.3332 },
      { x: 0.8333, y: 0.1665 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  textureSheetAnimation: { tiles: { x: 5, y: 2 }, timeMode: "FPS", fps: 0 },
  _editorData: {
    textureId: "ROCKS",
    simulation: {
      movements: "PROJECTILE_STRAIGHT",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
    showLocalAxes: false,
    showWorldAxes: false,
    frustumCulled: true,
    terrain: {
      textureId: "WIREFRAME",
      movements: "DISABLED",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
  },
};

const destroy: ParticleSystemConfig = {
  transform: { rotation: { x: -90 } },
  duration: 0.3,
  looping: false,
  startLifetime: { min: 0.67, max: 1.77 },
  startSpeed: { min: 1.21, max: 2.85 },
  startSize: { min: 2.11, max: 5.68 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: { r: 0.43529411764705883, g: 0.403921568627451, b: 0.403921568627451 },
    max: {
      r: 0.25882352941176473,
      g: 0.24313725490196078,
      b: 0.24313725490196078,
    },
  },
  gravity: 5.5,
  maxParticles: 25,
  emission: { rateOverTime: 50 },
  shape: { shape: "CONE", cone: { angle: 47.5024, radius: 0.5562 } },
  sizeOverLifetime: {
    bezierPoints: [
      { x: 0, y: 0, percentage: 0 },
      { x: 1, y: 1, percentage: 1 },
    ],
  },
  opacityOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.6366, y: 1.0466 },
      { x: 0.8033, y: 0.88, percentage: 0.8033 },
      { x: 0.9699, y: 0.7133 },
      { x: 0.8333, y: 0.1665 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  rotationOverLifetime: { isActive: true, min: -342.5, max: 299 },
  textureSheetAnimation: {
    tiles: { x: 5, y: 2 },
    timeMode: "FPS",
    fps: 0,
    startFrame: { max: 10 },
  },
  _editorData: {
    textureId: "ROCKS",
    simulation: {
      movements: "DISABLED",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
    showLocalAxes: false,
    showWorldAxes: false,
    frustumCulled: true,
    terrain: {
      textureId: "WIREFRAME",
      movements: "DISABLED",
      movementSpeed: 1,
      rotation: "DISABLED",
      rotationSpeed: 1,
    },
  },
};

export const rockEffect: EffectConfig = {
  name: "Rock",
  init,
  movement,
  destroy,
};
