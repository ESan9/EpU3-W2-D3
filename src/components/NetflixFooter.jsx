import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const NetflixFooter = () => {
  return (
    <footer
      className="text-secondary py-4 mt-5"
      style={{ backgroundColor: "#141414", borderRadius: "6px" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Row className="mb-3">
              <Col>
                <div className="d-flex gap-3 fs-5 justify-content-center justify-content-lg-start">
                  <BsFacebook />
                  <BsInstagram />
                  <BsTwitterX />
                  <BsYoutube />
                </div>
              </Col>
            </Row>

            <Row className="row-cols-sm-1 row-cols-md-4">
              <Col className="footer-links">
                <p>
                  <a href="#">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#">Media Center</a>
                </p>
                <p>
                  <a href="#">Privacy</a>
                </p>
                <p>
                  <a href="#">Contact Us</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Audio Description</a>
                </p>
                <p>
                  <a href="#">Investor Relations</a>
                </p>
                <p>
                  <a href="#">Legal Notices</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Help Center</a>
                </p>
                <p>
                  <a href="#">Jobs</a>
                </p>
                <p>
                  <a href="#">Cookie Preferences</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#">Gift Cards</a>
                </p>
                <p>
                  <a href="#">Terms of Use</a>
                </p>
                <p>
                  <a href="#">Corporate Information</a>
                </p>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <button className="btn btn-outline-secondary btn-sm rounded-0">
                    Service Code
                  </button>
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <small className="text-secondary">
                    &copy; 1997–2023 Netflix, Inc.
                  </small>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NetflixFooter;
