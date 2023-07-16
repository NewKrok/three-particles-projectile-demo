import * as THREE from "three";

import { updateParticleSystems } from "@newkrok/three-particles/src/js/effects/three-particles.js";

export const cycleData = {
  now: 0,
  pauseStartTime: 0,
  totalPauseTime: 0,
  elapsed: 0,
  delta: 0,
};

export const createScene = () => {
  const clock = new THREE.Clock();
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 5, 15);
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(5, 5, 2);
  camera.lookAt(0, 0, 0);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(0, 2, 0);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.castShadow = true;
  const d = 20;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.radius = 0.1;
  directionalLight.shadow.bias = -0.0000006;
  directionalLight.shadow.camera.top = d;
  directionalLight.shadow.camera.bottom = -d;
  directionalLight.shadow.camera.left = -d;
  directionalLight.shadow.camera.right = d;
  directionalLight.shadow.camera.near = 0.1;
  directionalLight.shadow.camera.far = 100;
  directionalLight.position.set(-1, 5, 1);
  scene.add(directionalLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let isPaused = false;

  const resumeTime = () => {
    if (isPaused) {
      isPaused = false;
      cycleData.totalPauseTime += Date.now() - cycleData.pauseStartTime;
    }
  };

  const pauseTime = () => {
    if (!isPaused) {
      isPaused = true;
      cycleData.pauseStartTime = Date.now();
    }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseTime();
    else resumeTime();
  });

  const setCanvasSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };
  setCanvasSize();
  window.onresize = setCanvasSize;

  const animate = () => {
    if (!isPaused) {
      const rawDelta = clock.getDelta();
      cycleData.now = Date.now() - cycleData.totalPauseTime;
      cycleData.delta = rawDelta > 0.1 ? 0.1 : rawDelta;
      cycleData.elapsed = clock.getElapsedTime();

      updateParticleSystems(cycleData);
    }

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };
  animate();

  return { scene, camera };
};

export const createWorld = (scene: THREE.Scene) => {
  const planeGeometry = new THREE.PlaneGeometry(50, 50, 1, 1);
  const planeMap = new THREE.TextureLoader().load(
    "assets/textures/chess-board.webp"
  );
  planeMap.wrapS = planeMap.wrapT = THREE.RepeatWrapping;
  planeMap.repeat.set(25, 25);
  const planeMaterial = new THREE.MeshPhongMaterial({
    map: planeMap,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.rotateX(-Math.PI / 2);
  scene.add(plane);

  const wallGeometry = new THREE.BoxGeometry(5, 2.5, 0.1);
  const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
  const wall = new THREE.Mesh(wallGeometry, wallMaterial);
  wall.castShadow = true;
  wall.receiveShadow = true;
  wall.position.set(0, 1.25, -5);
  scene.add(wall);

  return { children: [plane, wall] };
};
