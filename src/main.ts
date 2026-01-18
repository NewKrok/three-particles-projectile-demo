import * as THREE from "three";

import {
  ProjectileType,
  getActiveConfig,
  setActiveConfigByType,
} from "./projectile-selector";
import { createProjectile, updateProjectiles } from "./projectiles";
import { createScene, createWorld, cycleData } from "./base-scene";
import { cameraShake } from "./camera-shake";

import Stats from "three/examples/jsm/libs/stats.module.js";
import { createParticleSystem } from "@newkrok/three-particles";
import { gsap } from "gsap";

const { scene, camera } = createScene();
const { children } = createWorld(scene);

cameraShake.setCamera(camera);

const stats = new Stats();
document.body.appendChild(stats.dom);

const weapon = new THREE.Object3D();
weapon.position.set(0, 1, 4);
scene.add(weapon);

const weaponMaterial = new THREE.MeshPhongMaterial({ color: 0xa69ad2 });

const weaponBaseGeometry = new THREE.SphereGeometry(0.25, 16, 16);
const weaponBase = new THREE.Mesh(weaponBaseGeometry, weaponMaterial);
weaponBase.castShadow = true;
weapon.add(weaponBase);

const weaponTurretGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.5);
const weaponTurret = new THREE.Mesh(weaponTurretGeometry, weaponMaterial);
weaponTurret.castShadow = true;
weapon.add(weaponTurret);
weaponTurret.position.set(0, 0, 0.2);

const projectileSocket = new THREE.Object3D();
weapon.add(projectileSocket);
projectileSocket.position.set(0, 0, 0.4);

const raycaster = new THREE.Raycaster();
const positionHelper = new THREE.Vector3();
const directionHelper = new THREE.Vector3();

let useAutoFire = false;
const projectileName: Element = document.querySelector(
  ".projectileName"
) as Element;
document.onkeydown = (event: KeyboardEvent) => {
  if (event.code === "Space") {
    useAutoFire = !useAutoFire;
    return;
  }
  if (event.code === "KeyS") {
    cameraShake.setEnabled(!cameraShake.getEnabled());
    console.log(
      `Camera shake ${cameraShake.getEnabled() ? "enabled" : "disabled"}`
    );
    return;
  }
  const codeMap = {
    Digit1: ProjectileType.FIRE,
    Digit2: ProjectileType.LIGHT,
    Digit3: ProjectileType.ICE,
    Digit4: ProjectileType.ROCK,
    Digit5: ProjectileType.WATER,
    Digit6: ProjectileType.NATURE,
    Digit7: ProjectileType.DARKNESS,
    Digit8: ProjectileType.SMOKE,
    Digit9: ProjectileType.RAINBOW,
  };
  const type = codeMap[event.code as keyof typeof codeMap];
  if (!type && type !== 0) return;
  setActiveConfigByType(type);
  const config = getActiveConfig();
  projectileName.innerHTML = config.name;
};

const pointer = new THREE.Vector2();
document.onmousemove = (event: MouseEvent) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

const shoot = () => {
  const projectile = createProjectile({
    position: projectileSocket.getWorldPosition(positionHelper).clone(),
    direction: weaponTurret.getWorldDirection(directionHelper).clone(),
    speed: 10,
    type: "bullet",
    effect: getActiveConfig(),
  });
  scene.add(projectile.mesh);

  const initEffect = createParticleSystem(
    getActiveConfig().init,
    cycleData.now
  );
  initEffect.instance.position.copy(projectile.config.position);
  initEffect.instance.rotation.copy(weapon.rotation);
  scene.add(initEffect.instance);
  gsap.delayedCall(5, initEffect.dispose);

  gsap.to(weaponTurret.position, {
    duration: 0.1,
    z: 0.05,
    startAt: { z: 0.2 },
    yoyo: true,
    repeat: 1,
  });

  cameraShake.trigger(0.05, 0.25);

  gsap.delayedCall(5, () => projectile?.dispose());
};

document.onmousedown = shoot;

const autoFireVector = new THREE.Vector3();
let lastAutoFireTime = 0;
const step = () => {
  stats.update();
  requestAnimationFrame(step);

  cameraShake.update(cycleData.delta);

  if (useAutoFire) {
    autoFireVector.set(
      2 * Math.cos(cycleData.elapsed * 0.5) +
        1.8 * Math.cos(cycleData.elapsed * 2),
      1.5 + 1.8 * Math.sin(cycleData.elapsed * 2),
      -10
    );
    weapon.lookAt(autoFireVector);
    if (cycleData.elapsed - lastAutoFireTime > 0.1) {
      shoot();
      lastAutoFireTime = cycleData.elapsed;
    }
  } else {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(children, false);
    if (intersects.length > 0) weapon.lookAt(intersects[0].point);
  }

  updateProjectiles({
    delta: cycleData.delta,
    scene,
    children: children.filter(
      (c) => ![weapon, weaponBase, weaponTurret].includes(c)
    ),
  });
};
step();
