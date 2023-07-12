import { ParticleSystemConfig } from "@newkrok/three-particles";

export type EffectConfig = {
  name: string;
  init: ParticleSystemConfig;
  movement: ParticleSystemConfig;
  destroy: ParticleSystemConfig;
};
