import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    // Only run if tsParticles is loaded (from CDN in index.html)
    if (!window.tsParticles) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const baseConfig = {
      detectRetina: true,
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: {
          value: reduceMotion ? 25 : 70,
          density: { enable: true, area: 800 }
        },
        color: { value: ["#ffffff", "#93c5fd"] },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: { min: 1, max: 4 } },
        links: {
          enable: true,
          color: "#93c5fd",
          opacity: 0.5,
          distance: 140,
          width: 1
        },
        move: {
          enable: !reduceMotion,
          speed: 1.4,
          direction: "none",
          outModes: { default: "out" }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: !reduceMotion, mode: "repulse" },
          onClick: { enable: !reduceMotion, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 120, duration: 0.3 },
          push: { quantity: 4 }
        }
      }
    };

    window.tsParticles.load("heroParticles", baseConfig);
  }, []);

  return (
    <div
      id="heroParticles"
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    />
  );
};

export default Particles;