import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/Authprovider";
import Sociallogin from "./Sociallogin/Sociallogin";

const Login = () => {
  const { login} = useContext(authContext);
  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loagedUser = result.user;
        console.log(loagedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row d-flex justify-content-center align-items-center container mt-5">
      <div className="col-md-6 ">
        <Container className="mx-auto w-50">
          <h3>Please Login</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </Form.Group>

            <Button variant="primary"type="submit">
              Login
            </Button>
            <br />
            <Form.Text className="text-muted">
              Don't have an account please
              <Link className="ms-2" to="/register">register</Link>
            </Form.Text>
          </Form>
          <Sociallogin></Sociallogin>
        </Container>
        
      </div>
      <div className="col-md-6 ">
        <img
          className="w-100"
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
