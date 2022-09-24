import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="justify-content-between">
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">🏠Home</Link>
            <Link to="/Contacto" className="text-white ms-3 text-decoration-none">📓Contacto</Link>
          </div>
          <Navbar.Brand className="text-white ms-3">Happy Cake 🎂</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
