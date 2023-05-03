import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Providers/Authprovider";


const Header = () => {
  const { user, logout } = useContext(authContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Navbar className="d-flex align-item-center " bg="info" variant="dark">
        <Container>
          <h4>Hot Recipes</h4>
          <Nav className="me-end gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-danger" : "default")}
            >
              Home
            </NavLink>
            
            <NavLink to="/blog" className={({isActive})=>(isActive?"text-danger":"default")}>Blog</NavLink>
            {user ? (
              <>
                <span>
                  <img className=" rounded" style={{width:"30px"}} src={user?.photoURL} alt="" />
                </span>
                <Button onClick={handleLogOut}>Signout</Button>
              </>
            ) : (
              <NavLink to="/login" className={({isActive})=>(isActive?"text-danger":"default")}>Login</NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
