import React, { useEffect, useState } from "react";
import "./App.css";
import { setup } from "./script";
import { About, Landing } from "./components";

export default function App() {

  const [step, setStep] = useState(0);

  useEffect(() => {
    setup();
  }, []);

  const onHello = () => {
    console.log('onHello');
    setStep(1);
  };

  const onProjects = () => {
    console.log('onProjects');
    setStep(0);
  };

  return (
    <div style={{ height: "100vh" }}>
      <canvas id="canvas"></canvas>
      {step === 0 && <Landing onHello={onHello} />}
      {/* {step === 1 && <About onProjects={onProjects} />} */}
    </div>
  );
}
