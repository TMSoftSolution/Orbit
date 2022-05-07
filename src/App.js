import React, { useEffect, useState } from "react";
import "./App.css";
import { setup } from "./script";
import gsap from "gsap";

export default function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setup();
  }, []);

  const onHello = () => {
    console.log("onHello");
    setStep(1);
    gsap
      .timeline()
      .to("#landing-logo", {
        height: 55,
        duration: 4,
        rotate: 360,
        top: 50,
        left: 50,
        ease: "power3.out",
        onComplete: () => {
          console.log("complete");
        },
      })
      .to("#logo-text", { duration: 1, left: 90 }, "-=2")
      .to("#btn-contact", { duration: 1, right: 0 }, "-=2")
      .to("#about-container", { duration: 2, top: 0 }, "-=4");
  };

  const onProjects = () => {
    console.log("onProjects");
    // setStep(0);
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* Canvas */}
      <canvas id="canvas"></canvas>
      {/* Logo */}
      <img id="landing-logo" src="assets/landing-logo.png" alt="landig logo" />
      {/* Text Logo */}
      <img id="logo-text" src="assets/logo-text.png" alt="logo text" />
      <button id="btn-contact" className="btn-main">
        CONTACT
      </button>
      {step === 0 && (
        <button id="btn-hello" className="btn-main" onClick={onHello}>
          HELLO
        </button>
      )}
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
