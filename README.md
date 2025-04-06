# THREE Particles - Projectile Demo

A demonstration project showcasing various particle effects and projectiles using the [@newkrok/three-particles](https://github.com/NewKrok/three-particles) library (v2.0.2) with Three.js.

## About

This project serves as a sample implementation of the @newkrok/three-particles package, demonstrating how to create and customize different types of particle effects including fire, ice, light, rock, and water projectiles in a 3D environment.

## Installation

```bash
# Clone the repository
git clone https://github.com/NewKrok/three-particles-projectile-demo.git

# Navigate to the project directory
cd three-particles-projectile-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:8080` to see the demo in action. You can interact with the demo to see different particle effects.

## Features

- Multiple particle effect demonstrations (fire, ice, light, rock, water)
- Interactive projectile selection
- Real-time 3D rendering with Three.js
- Customizable particle system configurations

## Live Demo

https://newkrok.com/developer-area/three-particles-projectile-demo

## Video

https://youtu.be/pEpFLGgJ33w

## Screenshots

<img src="https://github.com/NewKrok/three-particles-projectile-demo/assets/13141660/b93ce449-fc56-4e70-9134-9474b82ac352" width="320px"></img>
<img src="https://github.com/NewKrok/three-particles-projectile-demo/assets/13141660/2fbace0f-6f13-4677-b816-06412b0e5872" width="320px"></img>

## Customizing Particle Effects

This demo showcases five different particle effect types: fire, ice, light, rock, and water. Each effect has its own configuration file in the `src/` directory.

To customize an existing effect or create a new one:

1. Examine one of the existing effect config files (e.g., `fire-effect-config.ts`)
2. Create a new config file with your desired parameters
3. Import your new effect in `projectile-selector.ts`
4. Add your effect to the `typeMap` in `projectile-selector.ts`
5. Update the `ProjectileType` enum to include your new effect

Each effect configuration consists of three main components:

- `init`: Particle effect when the projectile is created
- `movement`: Particle effect while the projectile is moving
- `destroy`: Particle effect when the projectile hits something

## Controls

- **Mouse Movement**: Aim the weapon
- **Mouse Click**: Fire a projectile
- **Space**: Toggle auto-fire mode
- **Number Keys (1-5)**: Switch between different projectile types
  - 1: Fire
  - 2: Light
  - 3: Ice
  - 4: Rock
  - 5: Water
