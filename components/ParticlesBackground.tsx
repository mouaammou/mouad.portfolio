import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
const ParticulesLayout = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(currentTheme);

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener);
    };
  }, []);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particleColor = theme === 'light' ? '#777' : '#555';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "presetName",
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: particleColor
          },
          move: {
            direction: "bottom",
            enable: true,
            random: true,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle",
            close: true,
            fill: true
          },
          size: {
            value: { min: 0.5, max: 2 } // Smaller particle size
          },
          links: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.4,
            width: 0.5
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticulesLayout;