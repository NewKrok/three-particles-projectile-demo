import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { SSAOPass } from "three/examples/jsm/postprocessing/SSAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
import { updateParticleSystems } from "@newkrok/three-particles";

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
  scene.fog = new THREE.FogExp2(0xccddee, 0.005);
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  camera.position.set(10, 4, 0);
  camera.lookAt(0, 0, 0);

   const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

   const renderTarget = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight
  );

  const composer = new EffectComposer(renderer, renderTarget);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const ssaoPass = new SSAOPass(
    scene,
    camera,
    window.innerWidth,
    window.innerHeight
  );
  ssaoPass.kernelRadius = 16;
  ssaoPass.minDistance = 0.005;
  ssaoPass.maxDistance = 0.1;
  ssaoPass.output = SSAOPass.OUTPUT.Default;
  composer.addPass(ssaoPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5,
    0.4,
    0.85
  );
  composer.addPass(bloomPass);

  const fxaaPass = new ShaderPass(FXAAShader);
  fxaaPass.material.uniforms["resolution"].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
  composer.addPass(fxaaPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.castShadow = true;
  directionalLight.shadow.bias = -0.001;
  directionalLight.shadow.camera.left = -20;
  directionalLight.shadow.camera.right = 20;
  directionalLight.shadow.camera.top = 20;
  directionalLight.shadow.camera.bottom = -20;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 200;
  directionalLight.shadow.mapSize.width = 4096;
  directionalLight.shadow.mapSize.height = 4096;
  scene.add(directionalLight);

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
    composer.render();
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

    composer.render();

    requestAnimationFrame(animate);
  };
  animate();

  return { scene, camera };
};

export const createWorld = (scene: THREE.Scene) => {
  const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
  const planeMap = new THREE.TextureLoader().load(
    "assets/textures/chess-board.webp"
  );
  planeMap.wrapS = planeMap.wrapT = THREE.RepeatWrapping;
  planeMap.repeat.set(50, 50);
  const planeMaterial = new THREE.MeshPhongMaterial({
    map: planeMap,
    color: 0x888888,
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
