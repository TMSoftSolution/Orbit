import { Image } from "react-bootstrap";
import "./index.css";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Landing(props) {
  const [step, setStep] = useState(0);

  const onHello = () => {
    // props.onHello();
    // setStep(1);
    // gsap.to("#container", {
    //   display: "block",
    //   duration: 4,
    // });
    gsap.to("#landing-logo", {
      display: "initial",
      scale: 0.12,
      duration: 3,
      top: 50,
      left: 50,
      onComplete: () => {
        console.log('complete');
      }
    });
  };

  return (
    <div id="container">
      <Image
        id="landing-logo"
        src="assets/landing-logo.png"
        alt="landig logo"
      />
      {step === 0 && (
        <button id="btn-hello" className="btn-main mt-5" onClick={onHello}>
          HELLO
        </button>
      )}
    </div>
  );
}
