import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/Authprovider";

const Header = () => {
    const {user}=useContext(authContext);
    
  return (
    <>
      <Navbar className="d-flex align-item-center" bg="info" variant="dark">
        <Container>
              <h4>Hot Recipes</h4>
              <Nav className="me-end gap-4">
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>
              </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
