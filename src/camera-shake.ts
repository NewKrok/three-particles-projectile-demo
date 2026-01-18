import * as THREE from "three";

interface ShakeConfig {
  intensity: number;
  duration: number;
}

class CameraShake {
  private camera: THREE.Camera | null = null;
  private originalPosition = new THREE.Vector3();
  private shakeOffset = new THREE.Vector3();
  private currentIntensity = 0;
  private remainingDuration = 0;
  private isEnabled = true;

  public setCamera(camera: THREE.Camera): void {
    this.camera = camera;
    this.originalPosition.copy(camera.position);
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled && this.camera) {
      this.camera.position.copy(this.originalPosition);
      this.shakeOffset.set(0, 0, 0);
      this.currentIntensity = 0;
      this.remainingDuration = 0;
    }
  }

  public getEnabled(): boolean {
    return this.isEnabled;
  }

  public trigger(intensity: number, duration: number): void {
    if (!this.isEnabled) return;

    if (intensity > this.currentIntensity) {
      this.currentIntensity = intensity;
      this.remainingDuration = duration;
    }
  }

  public update(delta: number): void {
    if (!this.camera || !this.isEnabled || this.remainingDuration <= 0) {
      return;
    }

    this.remainingDuration -= delta;

    if (this.remainingDuration <= 0) {
      this.camera.position.copy(this.originalPosition);
      this.shakeOffset.set(0, 0, 0);
      this.currentIntensity = 0;
      return;
    }

    const progress = 1 - this.remainingDuration / 0.4;
    const falloff = Math.pow(1 - progress, 2);
    const effectiveIntensity = this.currentIntensity * falloff;

    this.shakeOffset.set(
      (Math.random() - 0.5) * 2 * effectiveIntensity,
      (Math.random() - 0.5) * 2 * effectiveIntensity,
      (Math.random() - 0.5) * 2 * effectiveIntensity
    );

    this.camera.position.copy(this.originalPosition).add(this.shakeOffset);
  }

  public updateCameraOrigin(newPosition: THREE.Vector3): void {
    this.originalPosition.copy(newPosition);
  }
}

export const cameraShake = new CameraShake();
