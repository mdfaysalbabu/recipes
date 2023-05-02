import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="d-flex align-item-center" bg="white" variant="dark">
        <Container>
              <h4>Hot Recipes</h4>
              <Nav className="me-end gap-4">
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/blog'>User</Link>
              </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
