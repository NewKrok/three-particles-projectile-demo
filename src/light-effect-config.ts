import { EffectConfig } from "./types";
import { ParticleSystemConfig } from "@newkrok/three-particles";

const init: ParticleSystemConfig = {
  duration: 0.3,
  looping: false,
  startLifetime: { min: 0.5, max: 1 },
  startSpeed: { min: 0.1, max: 0.3 },
  startSize: { min: 2, max: 4 },
  startRotation: { min: -15, max: 15 },
  gravity: -1,
  maxParticles: 10,
  emission: { rateOverTime: 20 },
  shape: {
    sphere: { radius: 0.3813 },
    cone: { angle: 21.6024, radius: 0.4687 },
  },
  sizeOverLifetime: {
    isActive: true,
    curveFunction: "ELASTIC_OUT",
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
  noise: {
    isActive: true,
    useRandomOffset: true,
    strength: 0.11,
    positionAmount: 0.453,
    sizeAmount: 5,
  },
  _editorData: {
    textureId: "GRADIENT_POINT",
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
  startLifetime: { min: 0.12, max: 0.4 },
  startSpeed: { min: 0, max: 0 },
  startSize: { min: 3, max: 4 },
  startColor: {
    max: {
      r: 0.7333333333333333,
      g: 0.8352941176470589,
      b: 0.9686274509803922,
    },
  },
  simulationSpace: "WORLD",
  maxParticles: 25,
  emission: { rateOverTime: 0, rateOverDistance: 20 },
  shape: { sphere: { radius: 0.1 } },
  renderer: { blending: "THREE.AdditiveBlending" },
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
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.3333, y: 0.6666 },
      { x: 0.5, y: 0.5, percentage: 0.5 },
      { x: 0.6666, y: 0.3332 },
      { x: 0.8333, y: 0.1665 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  noise: {
    useRandomOffset: true,
    strength: 0.27,
    frequency: 0.114,
    positionAmount: 0.278,
  },
  _editorData: {
    textureId: "GRADIENT_POINT",
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
  duration: 0.4,
  looping: false,
  startLifetime: { min: 0.3, max: 0.4 },
  startSpeed: { min: 0.1, max: 0.93 },
  startSize: { min: 12.25, max: 25.96 },
  startRotation: { min: -15, max: 15 },
  maxParticles: 10,
  emission: { rateOverTime: 100 },
  shape: {
    sphere: { radius: 0.3813 },
    cone: { angle: 21.6024, radius: 0.4687 },
  },
  sizeOverLifetime: {
    isActive: true,
    curveFunction: "ELASTIC_OUT",
    bezierPoints: [
      { x: 0, y: 0, percentage: 0 },
      { x: 1, y: 1, percentage: 1 },
    ],
  },
  opacityOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 0.485, percentage: 0 },
      { x: 0.1666, y: 0.3183 },
      { x: 0.3433, y: 0.4366 },
      { x: 0.51, y: 0.27, percentage: 0.51 },
      { x: 0.6766, y: 0.1032 },
      { x: 0.8333, y: 0.1665 },
      { x: 1, y: 0, percentage: 1 },
    ],
  },
  noise: {
    isActive: true,
    useRandomOffset: true,
    strength: 0.11,
    positionAmount: 0.453,
    sizeAmount: 5,
  },
  _editorData: {
    textureId: "GRADIENT_POINT",
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

export const lightEffect: EffectConfig = {
  name: "Light",
  init,
  movement,
  destroy,
};
