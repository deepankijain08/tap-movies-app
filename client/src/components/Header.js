import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Movies App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
            <Link
              to="/add-movie"
              className={
                location.pathname === "/add-movie"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Add Movie
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
