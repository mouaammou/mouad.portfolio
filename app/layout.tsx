'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#555"
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
        value: { min: 1, max: 5 }
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
          <Navbar />
          <main className="min-h-screen bg-background relative">
            <div className="container mx-auto relative z-50">{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}