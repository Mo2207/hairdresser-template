"use client";
import { useEffect, useContext } from "react";
import { CavaniContext } from "../../Context";

const Particles = () => {
  const { nav } = useContext(CavaniContext);
  useEffect(() => {
    // Ensure the particles.js script is loaded and accessible
    // if (typeof window !== "undefined") {
    //   import("particles.js").then((particlesJS) => {
    //     if (window.particlesJS) {
    //       window.particlesJS.load(
    //         "particles-js",
    //         "/particlesConfig.json",
    //         function () {
    //           console.log("Particles.js loaded");
    //         }
    //       );
    //     } else {
    //       console.error("particlesJS is not defined");
    //     }
    //   });
    // }
  }, []);

  return (
    <div className={`author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15] ${nav !== 'home' ? 'middle:hidden' : ''}`}>
      <div
        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-2xl"
        data-img-url="assets/img/about/front-page-hair.jpg"
      />
      {/* <div className="particle_wrapper">
        <div
          id="particles-js"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundImage: `url('assets/img/about/1.jpg')`,
          }}
        />
      </div> */}
    </div>
  );
};

export default Particles;