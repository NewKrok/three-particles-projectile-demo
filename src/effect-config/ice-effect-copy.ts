//@ts-nocheck

import { EffectConfig } from "./types";
import { ParticleSystemConfig } from "@newkrok/three-particles";

const init: ParticleSystemConfig = {
  duration: 0.3,
  looping: false,
  startLifetime: { min: 0.2, max: 0.7 },
  startSpeed: { min: 0.01, max: 0.39 },
  startSize: { min: 0.8, max: 1.2 },
  startOpacity: { min: 0.598, max: 0.68 },
  maxParticles: 10,
  emission: { rateOverTime: 100 },
  shape: { sphere: { radius: 0.3 } },
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
  rotationOverLifetime: { isActive: true, min: -45.7, max: 40.5 },
  _editorData: {
    textureId: "SNOWFLAKE",
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
  startLifetime: { min: 0.5, max: 0.7 },
  startSpeed: { min: 0, max: 0 },
  startSize: { min: 3, max: 4 },
  startColor: {
    min: {
      r: 0.3568627450980392,
      g: 0.22745098039215686,
      b: 0.5098039215686274,
    },
    max: {
      r: 0.08235294117647059,
      g: 0.16862745098039217,
      b: 0.2784313725490196,
    },
  },
  startRotation: { min: -360, max: 360 },
  simulationSpace: "WORLD",
  maxParticles: 50,
  emission: { rateOverTime: 0, rateOverDistance: 10 },
  shape: { sphere: { radius: 0.0315 } },
  renderer: { blending: "THREE.AdditiveBlending" },
  sizeOverLifetime: {
    isActive: true,
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 0.1666, y: 0.8333 },
      { x: 0.3333, y: 0.6666 },
      { x: 0.5, y: 0.5, percentage: 0.5 },
      { x: 0.6666, y: 0.3332 },
      { x: 0.8333, y: 0.35 },
      { x: 1, y: 0.4, percentage: 1 },
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
      movements: "CIRCLE",
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
  duration: 0.3,
  looping: false,
  startLifetime: { min: 0.2, max: 0.7 },
  startSpeed: { min: 0.01, max: 0.1 },
  startSize: { min: 6.77, max: 13.17 },
  startColor: {
    min: {
      r: 0.5607843137254902,
      g: 0.5529411764705883,
      b: 0.8862745098039215,
    },
    max: {
      r: 0.4549019607843137,
      g: 0.3803921568627451,
      b: 0.6588235294117647,
    },
  },
  startOpacity: { min: 0.598, max: 0.68 },
  maxParticles: 20,
  emission: { rateOverTime: 100 },
  shape: { sphere: { radius: 0.5 } },
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
  rotationOverLifetime: { isActive: true, min: -45.7, max: 40.5 },
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

export const iceEffect: EffectConfig = {
  name: "Ice",
  init,
  movement,
  destroy,
};
