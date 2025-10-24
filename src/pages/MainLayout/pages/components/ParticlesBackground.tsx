import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";

const imageSources = [
  "/photo1.png",
  "/photo2.png",
  "/photo3.png",
  "/photo4.png",
  "/photo5.png",
  "/photo6.png",
  "/photo7.png",
  "/photo8.png",
  "/photo9.png",
  "/photo10.png",
  "/photo11.png",
];

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="">
      <style>
        {`
          #tsparticles canvas {
            height: 230px !important;
            width: 100%;
          }
        `}
      </style>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          autoPlay: true,
          background: {
            position: "absolute",
            color: {
              value: "transparent"
            },
            opacity: 1
          },
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 110,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "outside",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: true,
              speed: 0.5,
              straight: true
            },
            number: {
              value: 8,
              density: {
                enable: false,
                value_area: 800
              }
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "image",
              image: imageSources.map(src => ({
                src,
                width: 100,
                height: 100,
                borderRadius: 50
              }))
            },
            size: {
              value: { min: 12, max: 22 }
            }
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
