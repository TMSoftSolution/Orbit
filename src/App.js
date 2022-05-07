import React, { useEffect, useState } from "react";
import "./App.css";
import { setup } from "./script";
import gsap from "gsap";
import { About } from "./components";

export default function App() {
  const [step, setStep] = useState(0);
  const [showTextLogo, setShowTextLogo] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    setup();
  }, []);

  const onHello = () => {
    console.log("onHello");
    setStep(1);
    gsap.to("#landing-logo", {
      height: 55,
      duration: 1,
      top: 50,
      left: 50,
      onComplete: () => {
        console.log("complete");
        setShowTextLogo(true);
        setShowContact(true);
      },
    });
  };

  const onProjects = () => {
    console.log("onProjects");
    setStep(0);
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* Canvas */}
      <canvas id="canvas"></canvas>
      {/* Logo */}
      <img id="landing-logo" src="assets/landing-logo.png" alt="landig logo" />
      {/* Text Logo */}
      {showTextLogo && (
        <img id="logo-text" src="assets/logo-text.png" alt="logo text" />
      )}
      {showContact && (
        <button id="btn-contact" className="btn-main">
          CONTACT
        </button>
      )}
      {step === 0 && (
        <button id="btn-hello" className="btn-main" onClick={onHello}>
          HELLO
        </button>
      )}
      {/* About */}
      {step === 1 && <About onProjects={onProjects} />}
    </div>
  );
}
