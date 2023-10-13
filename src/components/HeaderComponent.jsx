import { Navbar, Nav, Container, NavDropdown, Badge, Form, Dropdown, DropdownButton, Button, InputGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap"
import logo from '../assets/logo.svg';

const HeaderComponent = () => {
  return (
  
      <Navbar collapseOnSelect={true} className="bg-dark text-white" style={{ width: "100%", margin: 0, padding: 0 }}>
        <Container className="d-flex justify-content-between" style={{ display: "block", position: "relative" }} fluid>
          <Navbar.Brand href="https://gruposaber.com.br">
            <img src={logo} className="logo" alt="grupo saber logo" style={{ maxWidth: '100%' }} />
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" fluid />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-white"></Nav>
            <Nav className="text-white" style={{ color: "white" }}>
              <Nav.Link href="https://gruposaber.com.br" style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="https://gruposaber.com.br/quem-somos" style={{ color: "white" }}>Quem Somos</Nav.Link>
              <Nav.Link href="https://gruposaber.com.br/contato" style={{ color: "white" }}>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default HeaderComponent;

