# @newkrok/three-particles Documentation

This document provides detailed information about how the @newkrok/three-particles package is used in this demo project.

## Overview

The @newkrok/three-particles package (v2.0.2) is a particle system library for Three.js that allows you to create various particle effects for your 3D applications. This demo showcases how to create projectile effects using this library.

## Key Components

### Particle System Creation

The particle system is created using the `createParticleSystem` function from the @newkrok/three-particles package:

```typescript
import { createParticleSystem } from "@newkrok/three-particles";

// Create a particle system with a specific configuration and timestamp
const particleSystem = createParticleSystem(effectConfig, timestamp);
```

### Effect Configuration

Each particle effect has a configuration object that defines its appearance and behavior. The configuration is structured as follows:

```typescript
export type EffectConfig = {
  name: string;
  init: ParticleSystemConfig;
  movement: ParticleSystemConfig;
  destroy: ParticleSystemConfig;
};
```

Where:
- `name`: The name of the effect
- `init`: Configuration for the initial particle burst when the projectile is created
- `movement`: Configuration for particles emitted while the projectile is moving
- `destroy`: Configuration for particles emitted when the projectile hits something

### Particle System Configuration

Each particle system (init, movement, destroy) has its own configuration with numerous parameters that control the appearance and behavior of the particles.

#### Using the Official Particles Editor

The easiest way to create and customize particle effects is to use the official @newkrok/three-particles editor available at:

[https://newkrok.com/developer-area/particles-editor](https://newkrok.com/developer-area/particles-editor)

This visual editor allows you to:

1. Create particle effects with an intuitive interface
2. Adjust all parameters in real-time
3. Preview your effects instantly
4. Export the configuration as JSON to use in your project

Once you've created your effect in the editor, you can copy the configuration and use it in your code.

## Example: Fire Effect Configuration

Here's a simplified example of how the fire effect is configured:

```typescript
export const fireEffect: EffectConfig = {
  name: "Fire",
  init: {
    count: 15,
    duration: 0.2,
    looping: false,
    // ... other parameters
  },
  movement: {
    count: 10,
    duration: 0.5,
    looping: true,
    // ... other parameters
  },
  destroy: {
    count: 30,
    duration: 1,
    looping: false,
    // ... other parameters
  }
};
```

## Creating Custom Effects

To create a custom effect:

1. Create a new configuration file (e.g., `my-effect-config.ts`)
2. Define your effect configuration with init, movement, and destroy settings
3. Import your effect in `projectile-selector.ts`
4. Add your effect to the `ProjectileType` enum and `typeMap`

## Advanced Usage

For more advanced usage of the @newkrok/three-particles package, refer to the official documentation at [https://github.com/NewKrok/three-particles](https://github.com/NewKrok/three-particles).
