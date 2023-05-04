import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { authContext } from "../../../Providers/Authprovider";
import { Link } from "react-router-dom";
import "./Register.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleLogin } = useContext(authContext);
  const [error, seterror] = useState("");
  const [user, setuser] = useState("");
  const [success, setSuccess] = useState("");
  const [accept, setAccept] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (password.length < 6) {
      seterror("password must be 6 character");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      seterror("password at least two number");
    }

    createUser(email, password)
      .then((result) => {
        const loagedUser = result.user;
        updateUserInfo(loagedUser, name, photo);
        console.log(loagedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateUserInfo = (currentUser, name, photo) => {
    updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handleGoogleLogin = () => {
    seterror("");
    setSuccess("");
    googleLogin()
      .then((result) => {
        const logedUser = result.user;
        updateUserInfo(logedUser, name, photo);
        setSuccess("successfully login");
        console.log(user);
      })
      .catch((error) => {
        seterror(error.message);
      });
  };
  const handleAccept = (event) => {
    setAccept(event.target.checked);
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
                placeholder="Enter Url"
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccept}
                name="accept"
                label={
                  <>
                    accept <Link to="/term">terms & condition</Link>
                  </>
                }
              />
            </Form.Group>
            <div>
              <h6 className="text-success">{success}</h6>
            </div>
            <div>
              <h6 className="text-danger">{error}</h6>
            </div>

            <Link to="/login">
              <Button variant="primary"disabled={!accept}  type="submit">
                register
              </Button>
            </Link>

            <br />
            <Form.Text className="text-muted">
              have an account please
              <Link className="ms-2" to="/login">
                login
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
          src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
