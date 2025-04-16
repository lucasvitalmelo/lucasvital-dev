'use client';
import { useEffect, useCallback, useState } from 'react';

import Particles from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { tsParticles, type ISourceOptions } from '@tsparticles/engine';

export default function ParticleBackground() {
  const [options, setOptions] = useState<ISourceOptions>();

  const initParticles = useCallback(async () => {
    await loadStarsPreset(tsParticles);

    setOptions({

      preset: 'stars',
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: { value: 300 },
        color: { value: '#4b5563' },
        move: {
          enable: true,
          speed: 0.9,
        },
        collisions: { enable: true }
      }
    });
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  if (!options) return null;

  return <Particles id="tsparticles" options={options} />;
}
