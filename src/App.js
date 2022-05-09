import React, {
  useEffect,
} from "react";
import "./App.css";
import { setup } from "./script";
import { cursor } from "./cursor";
import gsap from "gsap";

export default function App() {

  useEffect(() => {
    setup();
    cursor();
  }, []);

  const onHello = () => {
    console.log("onHello");
    gsap
      .timeline()
      .to("#landing-logo", {
        height: 55,
        duration: 2,
        rotate: 360,
        top: 50,
        left: 80,
        ease: "power3.out",
        onComplete: () => {
          console.log("complete");
        },
      })
      .to("#btn-hello", {duration: 0.5, opacity: 0, z: 0, stagger: 1}, "-=2")
      .to("#logo-text", { duration: 1, left: 120 }, "-=2")
      .to("#btn-contact", { duration: 1, right: 0 }, "-=2")
      .to(
        "#about-container",
        { duration: 5, opacity: 1, z: 1, immediateRender: false, stagger: 0 },
        "-=1"
      );
  };

  const onProjects = () => {
    console.log("onProjects");
    // setStep(0);
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* Canvas */}
      <canvas id="canvas"></canvas>
      {/* Cursor */}
      <div class="cursor"></div>
      {/* Logo */}
      <img id="landing-logo" src="assets/landing-logo.png" alt="landig logo" />
      {/* Text Logo */}
      <img id="logo-text" src="assets/logo-text.png" alt="logo text" />
      <button id="btn-contact" className="btn-main">
        CONTACT
      </button>
      <button id="btn-hello" className="btn-main" onClick={onHello}>
        HELLO
      </button>
      {/* About */}
      <div id="about-container">
        <div className="fs-2 text-white mx-5 px-5">
          LinkDAP is a boutique web development agency specializing in design,
          development, branding, and everything in between.
        </div>
        <button className="btn-main mt-5" onClick={onProjects}>
          PROJECTS
        </button>
      </div>
    </div>
  );
}
