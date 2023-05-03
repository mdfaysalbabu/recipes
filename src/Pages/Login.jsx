import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/Authprovider";
import Sociallogin from "./Sociallogin/Sociallogin";

const Login = () => {
  const { login, googleLogin } = useContext(authContext);
  const [user, setuser] = useState("");
  const [success, setSuccess] = useState("");
  const [error, seterror] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    seterror("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loagedUser = result.user;
        setSuccess("successfully login");
        form.reset();
        console.log(loagedUser);
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  const handleGoogleLogin = () => {
    seterror("");
    setSuccess("");
    googleLogin()
      .then((result) => {
        const logedUser = result.user;
        setSuccess("successfully login");
        console.log(user);
      })
      .catch((error) => {
        seterror(error.message);
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
            <div>
              <h6 className="text-success">{success}</h6>
            </div>
            <div>
              <h6 className="text-danger">{error}</h6>
            </div>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <br />
            <Form.Text className="text-muted">
              Don't have an account please
              <Link className="ms-2" to="/register">
                register
              </Link>
            </Form.Text>
          </Form>
          <div className=" social-button-container w-50 mt-3">
            <div className="">
              <img
                onClick={handleGoogleLogin}
                className=" social-button"
                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                alt=""
              />
            </div>
            <div className="">
              <img
                onClick={""}
                className=" social-button"
                src="https://i.ibb.co/g9f4P0S/github-btn.png"
                alt=""
              />
            </div>
          </div>
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
