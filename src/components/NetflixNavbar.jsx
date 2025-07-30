import { Navbar, Nav, Container } from "react-bootstrap";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NetflixNavbar = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#141414", borderRadius: "6px" }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Netflix Logo"
            style={{ height: "32px", width: "auto" }}
            className="me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movies" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/recently-added" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link as={Link} to="/my-list" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3 text-white fs-5">
            <BsSearch />
            <div className="fw-bold">KIDS</div>
            <BsBell />
            <BsPersonCircle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
