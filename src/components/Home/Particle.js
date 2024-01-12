import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
            color: "transparent",
        },
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1500,
                },
            },
            color: {
                value: ["#bbbbbb", "#cddeff"],
            },
            shape: {
                type: "polygon",
                stroke: {
                  width: 1,
                  color: ["#bbbbbb", "#cddeff"],
                },
                polygon: {
                  nb_sides: 5,
                },
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: ["#000000", "#cddeff"],
                opacity: 0.4,
                width: 0.5,
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
                value: 10,
            },
            opacity: {
                anim: {
                    enable: true,
                    speed: 5,
                    opacity_min: 0.6,
                },
            },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "pull",
            },
            onhover: {
              enable: false,
              mode: "grab",
            }
          },
          modes: {
            pull: {
              particles_nb: 100,
            },
            grab:{
              distance: 400,
            }
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;