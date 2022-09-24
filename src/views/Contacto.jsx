import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Tenemos planes especiales para ti y su mascota</h1>
      <Contacto />
    </Container>
  );
};
