//@ts-nocheck

import { EffectConfig } from "./types";
import { ParticleSystemConfig } from "@newkrok/three-particles";

const init: ParticleSystemConfig = {
  transform: { rotation: { y: 90 } },
  duration: 0.5,
  looping: false,
  startLifetime: { min: 0.5, max: 0.8 },
  startSpeed: { min: 0.4, max: 3.5 },
  startSize: { min: 2.2, max: 5 },
  startColor: {
    min: {
      r: 0.8156862745098039,
      g: 0.6862745098039216,
      b: 0.8705882352941177,
    },
    max: {
      r: 0.6196078431372549,
      g: 0.5725490196078431,
      b: 0.7254901960784313,
    },
  },
  gravity: 1.81,
  maxParticles: 15,
  emission: { rateOverTime: 200 },
  shape: {
    shape: "CONE",
    sphere: { radius: 0.4, arc: 180 },
    cone: { angle: 0, radius: 0.6436 },
  },
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
    textureId: "CIRCLE",
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
  startLifetime: { min: 0.4, max: 0.9 },
  startSpeed: { min: 0, max: 0 },
  startSize: { min: 2, max: 3 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: {
      r: 0.8156862745098039,
      g: 0.6862745098039216,
      b: 0.8705882352941177,
    },
    max: {
      r: 0.6196078431372549,
      g: 0.5725490196078431,
      b: 0.7254901960784313,
    },
  },
  simulationSpace: "WORLD",
  maxParticles: 50,
  emission: { rateOverTime: 0, rateOverDistance: 10 },
  shape: { sphere: { radius: 0.0001 } },
  renderer: { blending: "THREE.NormalBlending" },
  sizeOverLifetime: {
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
  opacityOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 0, percentage: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 1 },
      { x: 0.5, y: 1, percentage: 0.5 },
      { x: 1, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  noise: {
    isActive: true,
    useRandomOffset: true,
    strength: 0.18,
    positionAmount: 0.278,
    rotationAmount: 5,
  },
  _editorData: {
    textureId: "CIRCLE",
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
  startSpeed: { min: 0.93, max: 1.48 },
  startSize: { min: 1.29, max: 5.86 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: {
      r: 0.8156862745098039,
      g: 0.6862745098039216,
      b: 0.8705882352941177,
    },
    max: {
      r: 0.6196078431372549,
      g: 0.5725490196078431,
      b: 0.7254901960784313,
    },
  },
  gravity: 1.81,
  maxParticles: 30,
  emission: { rateOverTime: 60 },
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
  textureSheetAnimation: { timeMode: "FPS", fps: 0 },
  _editorData: {
    textureId: "CIRCLE",
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

export const waterEffect: EffectConfig = {
  name: "Water",
  init,
  movement,
  destroy,
};
