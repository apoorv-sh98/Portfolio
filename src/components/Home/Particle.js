import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
            color: "#ffffff",
        },
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        particles: {
            number: {
                value: 500,
                density: {
                    enable: true,
                    value_area: 1500,
                },
            },
            color: {
                value: "#71797E",
            },
            shape: {
                type: "circle",
                stroke: {
                width: 0.75,
                color: "#71797E",
                },
                polygon: {
                nb_sides: 5,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#D3D3D3",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                direction: "up",
                speed: 0.6,
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
            },
            size: {
                value: 1,
            },
            opacity: {
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                },
            },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;