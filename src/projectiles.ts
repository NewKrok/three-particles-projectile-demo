import * as THREE from "three";

import { EffectConfig } from "./types";
import { createParticleSystem } from "@newkrok/three-particles";
import { cycleData } from "./base-scene";
import { fireEffect } from "./effect-config/fire-effect-config";
import { gsap } from "gsap";
import { iceEffect } from "./effect-config/ice-effect-copy";
import { lightEffect } from "./effect-config/light-effect-config";
import { rockEffect } from "./effect-config/rock-effect-config";
import { waterEffect } from "./effect-config/water-effect-config";
import { natureEffect } from "./effect-config/nature-effect-config";
import { darknessEffect } from "./effect-config/darkness-effect-config";
import { smokeEffect } from "./effect-config/smoke-effect-config";
import { rainbowEffect } from "./effect-config/rainbow-effect-config";

export type ProjectileConfig = {
  position: THREE.Vector3;
  direction: THREE.Vector3;
  speed: number;
  type: string;
  effect: EffectConfig;
};

export type Projectile = {
  config: ProjectileConfig;
  mesh: THREE.Mesh;
  dispose: () => void;
};

const bulletMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

fireEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);
fireEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/flame.webp"
);
fireEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/flame.webp"
);

lightEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
lightEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
lightEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);

iceEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/snowflake.webp"
);
iceEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
iceEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);

rockEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);
rockEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/rocks.webp"
);
rockEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/rocks.webp"
);

waterEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/circle.webp"
);
waterEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/circle.webp"
);
waterEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/circle.webp"
);

natureEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
natureEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
natureEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);

darknessEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/circle-burst.webp"
);
darknessEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/circle-burst.webp"
);
darknessEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/circle-burst.webp"
);

smokeEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);
smokeEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);
smokeEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/cloud.webp"
);

rainbowEffect.init.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
rainbowEffect.movement.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);
rainbowEffect.destroy.map = new THREE.TextureLoader().load(
  "assets/textures/gradient-point.webp"
);

let projectiles: Array<Projectile> = [];
const raycaster = new THREE.Raycaster();

export const createProjectile = (projectileConfig: ProjectileConfig) => {
  const geometry = new THREE.SphereGeometry(0.05, 8, 8);
  const mesh = new THREE.Mesh(geometry, bulletMaterial);
  mesh.castShadow = true;
  mesh.position.copy(projectileConfig.position);

  const movementEffect = createParticleSystem(
    projectileConfig.effect.movement,
    cycleData.now
  );
  mesh.add(movementEffect.instance);

  const dispose = () => {
    movementEffect.dispose();
    mesh.parent!.remove(mesh);
    projectiles = projectiles.filter((p) => p !== projectile);
  };

  const projectile = {
    config: projectileConfig,
    dispose,
    mesh,
  };
  projectiles.push(projectile);

  return projectile;
};

export const updateProjectiles = ({
  delta,
  children,
  scene,
}: {
  delta: number;
  scene: THREE.Scene;
  children: Array<THREE.Object3D>;
}) => {
  projectiles.forEach((projectile) => {
    const directionVector = projectile.config.direction
      .clone()
      .multiplyScalar(projectile.config.speed * delta);

    raycaster.set(projectile.mesh.position.clone(), directionVector);
    const intersects = raycaster.intersectObjects(children, false);
    if (
      intersects.length > 0 &&
      intersects[0].distance < directionVector.length()
    ) {
      projectiles = projectiles.filter((p) => p !== projectile);
      projectile.mesh.position.copy(intersects[0].point);
      const endEffect = createParticleSystem(
        projectile.config.effect.destroy,
        cycleData.now
      );
      endEffect.instance.position.copy(projectile.mesh.position);
      scene.add(endEffect.instance);
      gsap.delayedCall(2, endEffect.dispose);
    } else projectile.mesh.position.add(directionVector);
  });
};
