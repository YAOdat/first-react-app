import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigationbar extends React.Component {
    render () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Horned Beasts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home Page</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More Beasts</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Report Abuse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}}

export default Navigationbar;
