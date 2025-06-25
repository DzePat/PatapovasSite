import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import "./Particle.css";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
    pauseOnBlur: false,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble"
          },
          resize: {}
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 20,
            speed: 3
          }
        }
      },
      particles: {
        color: {
          value: ["#cfb8ea"]
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "bounce",
          speed: 0.5
        },
        number: {
          value: 70
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            sync: false
          },
          value: { min: 0.3, max: 1 }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 5
        }
      },
      background: {
        color: "#ffffff",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      }
    ,
  }), []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Particle
