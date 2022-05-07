import { Container, Row } from "react-bootstrap";
import "./index.css";

export default function About(props) {
  const onProjects = () => {
    props.onProjects();
  };

  return (
    <Container
      id="container"
      className="d-flex justify-content-center align-items-center"
    >
      <Container className="text-center">
        <Row className="justify-content-center mb-5">
          <div className="fs-2 text-white">
            LinkDAP is a boutique web development agency specializing in design,
            development, branding, and everything in between.
          </div>
        </Row>
        <button className="btn-main mt-5" onClick={onProjects}>
          PROJECTS
        </button>
      </Container>
    </Container>
  );
}
