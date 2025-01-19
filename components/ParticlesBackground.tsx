'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main); // Load the full tsparticles package
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '', // Leave empty to inherit theme background color
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#00000',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: 'out',
          },
        },
        detectRetina: true,
      }}
    />
  );
}
