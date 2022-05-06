import { Container, Image, Row } from "react-bootstrap";
import "./index.css";

export default function Landing(props) {
  return (
    <Container
      id="container"
      className="d-flex justify-content-center align-items-center"
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Image
            src="assets/landing-logo.png"
            alt="landig logo"
            style={{ width: 250 }}
          />
        </Row>
        <button id="btn-main" className="mt-5">
          Hello
        </button>
      </Container>
    </Container>
  );
}
