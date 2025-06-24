"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    className,
    particleColor = "#FFFFFF",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
  } = props;

  return (
    <div className={cn("absolute inset-0 h-full w-full", className)}>
      <div className="absolute inset-0">
        {[...Array(particleDensity)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              backgroundColor: particleColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${minSize + Math.random() * (maxSize - minSize)}px`,
              height: `${minSize + Math.random() * (maxSize - minSize)}px`,
            }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};
