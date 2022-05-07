import { Container, Image, Row } from "react-bootstrap";
import "./index.css";
import gsap from "gsap";

export default function Landing(props) {
  const onHello = () => {
    // props.onHello();
    gsap.to("#landing-logo", {
      rotation: 360,
      x: -530,
      y: -380,
      duration: 2,
      scale: 0.1,
    });
  };

  return (
    <Container
      id="container"
      className="d-flex justify-content-center align-items-center"
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Image
            id="landing-logo"
            src="assets/landing-logo.png"
            alt="landig logo"
            style={{ width: 200 }}
          />
        </Row>
        <button id="btn-main" className="mt-5" onClick={onHello}>
          HELLO
        </button>
      </Container>
    </Container>
  );
}
