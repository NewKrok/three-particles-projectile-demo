//@ts-nocheck

import { EffectConfig } from "./types";
import { ParticleSystemConfig } from "@newkrok/three-particles";

const init: ParticleSystemConfig = {
  duration: 0.25,
  looping: false,
  startLifetime: { min: 0.5, max: 0.6 },
  startSpeed: { min: 0.5, max: 3.2 },
  startSize: { min: 4.94, max: 9.51 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: {
      r: 0.5294117647058824,
      g: 0.4823529411764706,
      b: 0.45098039215686275,
    },
    max: {
      r: 0.30980392156862746,
      g: 0.2901960784313726,
      b: 0.2901960784313726,
    },
  },
  maxParticles: 30,
  emission: { rateOverTime: 45 },
  shape: {
    shape: "CONE",
    sphere: { radius: 0.0001 },
    cone: { angle: 5.7918, radius: 0.119 },
  },
  renderer: { blending: "THREE.NormalBlending" },
  sizeOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 0.275, percentage: 0 },
        { x: 0.1666, y: 0.4416 },
        { x: 0.3399, y: 0.3283 },
        { x: 0.5066, y: 0.495, percentage: 0.5066 },
        { x: 0.6732, y: 0.6616 },
        { x: 0.8333, y: 0.8333 },
        { x: 1, y: 1, percentage: 1 },
      ],
      scale: 1
    }
  },
  opacityOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 0, percentage: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 1 },
        { x: 0.5, y: 1, percentage: 0.5 },
        { x: 1, y: 1 },
        { x: 1, y: 1 },
        { x: 1, y: 0, percentage: 1 },
      ],
      scale: 1
    }
  },
  rotationOverLifetime: { isActive: true, min: -10, max: 10 },
  _editorData: {
    textureId: "FLAME",
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
  duration: 100,
  startLifetime:  {
    type: 'BEZIER',
    scale: 1,
    bezierPoints: [
      { x: 0, y: 0.275, percentage: 0 },
      { x: 0.5, y: 0.5 },
      { x: 1, y: 1, percentage: 1 }
    ]
  } ,
   startSpeed: {
    type: 'BEZIER',
    bezierPoints: [
      { x: 0, y: 1, percentage: 0 },
      { x: 1, y: 1, percentage: 0.8 },
      { x: 1, y: 0, percentage: 1 }
    ],
    scale: 1
  }, 
  startSize: {
    type: 'BEZIER',
    bezierPoints: [
      { x: 0, y: 4, percentage: 0 },
      { x: 1, y: 2, percentage: 0.5 },
      { x: 1, y: 4, percentage: 1 }
    ],
    scale: 1
  } ,
  startOpacity: {
    type: 'BEZIER',
    bezierPoints: [
      { x: 0, y: 0.5, percentage: 0 },
      { x: 1, y: 1, percentage: 0.5 },
      { x: 1, y: 0.5, percentage: 1 }
    ],
    scale: 1
  },
  startRotation: {
    type: 'BEZIER',
    bezierPoints: [
      { x: 0, y: 0, percentage: 0 },
      { x: 0, y: 360, percentage: 0.5 },
      { x: 1, y: 0, percentage: 1 }
    ],
    scale: 1
  }, 
   startColor: {
    min: {
      r: 0.9725490196078431,
      g: 0.050980392156862744,
      b: 0.050980392156862744,
    },
    max: {
      r: 0.9921568627450981,
      g: 0.7803921568627451,
      b: 0.03137254901960784,
    },
  }, 
  simulationSpace: "WORLD",
  maxParticles:  70,
  emission: { rateOverTime:  0, rateOverDistance:{
    type: 'BEZIER',
    bezierPoints: [
      { x: 0, y: 0.5, percentage: 0 },
      { x: 1, y: 1, percentage: 1 }
    ],
    scale: 15
  } },
  shape: { sphere: { radius: 0.1  } },
  renderer: { blending: "THREE.AdditiveBlending" },
   sizeOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 1, percentage: 0 },
        { x: 0.1666, y: 0.8333 },
        { x: 0.3333, y: 0.6666 },
        { x: 0.5, y: 0.5, percentage: 0.5 },
        { x: 0.6666, y: 0.3332 },
        { x: 0.8333, y: 0.1665 },
        { x: 1, y: 0, percentage: 1 },
      ],
      scale: 1
    }
  },  
  velocityOverLifetime: {
    isActive: false,
    linear: {
      x: {
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 10, percentage: 0 },
          { x: 0, y: -10, percentage: 0.5 },
          { x: 1, y: 10, percentage: 1 }
        ],
        scale: 1
      },
      y:{
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 10, percentage: 0 },
          { x: 0, y: -10, percentage: 0.5 },
          { x: 1, y: 10, percentage: 1 }
        ],
        scale: 1
      },
      z: {
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 10, percentage: 0 },
          { x: 0, y: -10, percentage: 0.5 },
          { x: 1, y: 10, percentage: 1 }
        ],
        scale: 1
      },
    },
     /* orbital: {
      x: {
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 0.1, percentage: 0 },
          { x: 0, y: -0.1, percentage: 0.5 },
          { x: 1, y: 0.1, percentage: 1 }
        ],
        scale: 1
      },
      y:{
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 0.1, percentage: 0 },
          { x: 0, y: -0.1, percentage: 0.5 },
          { x: 1, y: 0.1, percentage: 1 }
        ],
        scale: 1
      },
      z: {
        type: 'BEZIER',
        bezierPoints: [
          { x: 0, y: 0.1, percentage: 0 },
          { x: 0, y: -0.1, percentage: 0.5 },
          { x: 1, y: 0.1, percentage: 1 }
        ],
        scale: 1
      },
    },  */
  },
   opacityOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 1, percentage: 0 },
        { x: 0.1666, y: 0.8333 },
        { x: 0.3333, y: 0.6666 },
        { x: 0.5, y: 0.5, percentage: 0.5 },
        { x: 0.6666, y: 0.3332 },
        { x: 0.8333, y: 0.1665 },
        { x: 1, y: 0, percentage: 1 },
      ],
      scale: 1
    }
  },  
   noise: {
    isActive: true,
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
  transform: { rotation: { x: -90 } },
  duration: 0.3,
  looping: false,
  startLifetime: { min: 0.3, max: 0.6 },
  startSpeed: { min: 0, max: 0.39 },
  startSize: { min: 5.86, max: 13.17 },
  startRotation: { min: -360, max: 360 },
  startColor: {
    min: {
      r: 0.9725490196078431,
      g: 0.050980392156862744,
      b: 0.050980392156862744,
    },
    max: {
      r: 0.9921568627450981,
      g: 0.7803921568627451,
      b: 0.03137254901960784,
    },
  },
  gravity: 0.06,
  maxParticles: 20,
  emission: { rateOverTime: 100 },
  shape: {
    sphere: { radius: 0.2939 },
    cone: { angle: 47.5024, radius: 0.2064 },
  },
  sizeOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 0.75, percentage: 0 },
        { x: 0.2566, y: 0.85 },
        { x: 0.1119, y: 0.8446 },
        { x: 0.3066, y: 0.915, percentage: 0.3066 },
        { x: 0.5833, y: 1.0149 },
        { x: 0.7566, y: 0.915 },
        { x: 1, y: 0.95, percentage: 1 },
      ],
      scale: 1
    }
  },
  opacityOverLifetime: {
    isActive: true,
    lifetimeCurve: 
    {
      type: 'BEZIER',
      bezierPoints: [
        { x: 0, y: 1, percentage: 0 },
        { x: 0.1666, y: 0.8333 },
        { x: 0.3333, y: 0.6666 },
        { x: 0.5, y: 0.5, percentage: 0.5 },
        { x: 0.6666, y: 0.3332 },
        { x: 0.8333, y: 0.1665 },
        { x: 1, y: 0, percentage: 1 },
      ],
      scale: 1
    }
  },
  rotationOverLifetime: { min: -342.5, max: 299 },
  textureSheetAnimation: {
    timeMode: "FPS",
    fps: 0,
    startFrame: { min: 1, max: 1 },
  },
  _editorData: {
    textureId: "FLAME",
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

export const fireEffect: EffectConfig = {
  name: "Fire",
  init,
  movement,
  destroy,
};
