"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import {
  useSpring,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Scotty() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 64 });

  useEffect(() => {
    setInterval(() => {
      smoothProgress.set(4 + Math.random() * 2);
    }, 3000);
  }, []);

  return (
    <div ref={container} className='-mr-48 z-50'>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={3} />
        <directionalLight position={[2, 1, 1]} />
        <Cube progress={smoothProgress} />
      </Canvas>
    </div>
  );
}

function Cube({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const mesh = useRef(null);

  const options = {
    damping: 20,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mouse", manageMouseMove);
  }, []);

  const scotty_texture = useLoader(TextureLoader, "/scottylabs.jpg");

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={scotty_texture} attach="material-0" />
      <meshStandardMaterial map={scotty_texture} attach="material-1" />
      <meshStandardMaterial map={scotty_texture} attach="material-2" />
      <meshStandardMaterial map={scotty_texture} attach="material-3" />
      <meshStandardMaterial map={scotty_texture} attach="material-4" />
      <meshStandardMaterial map={scotty_texture} attach="material-5" />
    </motion.mesh>
  );
}
