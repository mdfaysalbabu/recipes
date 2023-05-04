import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Providers/Authprovider";
import "./Header.css"




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
      <Navbar
        className="d-flex align-items-center  ms-auto justify-content-center"
        bg="info"
        variant="dark"
      >
        <Container>
          <h4 className="text-danger">Hot Recipes</h4>
          <Nav className="me-end gap-4  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-danger" : "default"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-danger" : "default"
              }
            >
              <p className="">Blog</p>
            </NavLink>
            {user ? (
              <>
                <span>
                    <img
                      className=" rounded mt-2"
                      style={{ width: "30px" }}
                      src={user?.photoURL}
                      alt=""
                      title={user.displayName}
                    />
                   
                </span>
                <Button className="bg-danger " onClick={handleLogOut}>
                  Signout
                </Button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-danger" : "default"
                }
              >
                <Button className="bg-danger">Login</Button>
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
