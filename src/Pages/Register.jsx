import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { authContext } from "../Providers/Authprovider";
import { Link } from "react-router-dom";
import Sociallogin from "./Sociallogin/Sociallogin";

const Register = () => {
  const [error, seterror] = useState("");
  const [accept, setAccept] = useState(false);
  const { createUser } = useContext(authContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if(password.length<6){
        seterror("password must be 6 character")
    }
    if(name,email,password,photo){
        createUser(email, password)
      .then((result) => {
        const loagedUser = result.user;
        console.log(loagedUser);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
        seterror("please type wright something")
    }
    
  };

  return (
    <div className="row d-flex justify-content-center align-items-center container mt-5 mb-4">
      <div className="col-md-6 ">
        <Container className="mx-auto w-50">
          <h3>Please Register</h3>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter "
                required
              />
            </Form.Group>
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
                <h6 className="text-danger">{error}</h6>
            </div>

            <Button variant="primary" type="submit">
              register
            </Button>
            <br />
            <Form.Text className="text-muted">
              have an account please
              <Link className="ms-2" to="/login">login</Link>
            </Form.Text>
          </Form>
          <Sociallogin></Sociallogin>
        </Container>
      </div>
      <div className="col-md-6 ">
        <img
          className="w-100"
          src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
