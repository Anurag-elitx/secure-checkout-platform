import React from 'react';
import { Container, ShopFlow Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ShopFlow NavbarComponent = () => {
  return (
    <>
      <ShopFlow Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/" className='ShopFlow Navbar-brand'>
            <ShopFlow Navbar.Brand>Flush Style</ShopFlow Navbar.Brand>
          </LinkContainer>
          <ShopFlow Navbar.Toggle aria-controls="ShopFlow NavbarColor02" />
          <ShopFlow Navbar.Collapse id="ShopFlow NavbarColor02">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/new-user">
                <Nav.Link>New User?</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/login">
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavDropdown.Item>Signup</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/logout">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </ShopFlow Navbar.Collapse>
        </Container>
      </ShopFlow Navbar>
    </>
  );
};

export default ShopFlow NavbarComponent;
