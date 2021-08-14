import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Button, Nav ,} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#7352FF", height: "15vh" }} >
      <Container>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          bre.ad/jane
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: "white" }}>
            Offerings
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "white" }}>
            Other Links
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "white" }}>
            Testimonials
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "white" }}>
            Portfolio
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "white" }}>
            Contact me
            </Nav.Link>
            <Button>Book Trial</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
