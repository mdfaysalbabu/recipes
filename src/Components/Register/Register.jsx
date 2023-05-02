import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [control, setControl] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      console.log("okay tikh ace ");
    } else {
      setError("password tikh nai");
      return;
    }
  };


  console.log(email, password);
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <p className="text-danger">{error}</p>
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  className="p-3 m-2"
                  type="text"
                  placeholder="photo url"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <div className="pass-container">
                  {control ? (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="text"
                      value={password}
                      placeholder="enter your password"
                    />
                  ) : (
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 m-2"
                      type="password"
                      placeholder="enter your password"
                    />
                  )}
                  <br />
                  <button onClick={() => setControl(!control)}>toggle</button>
                </div>
                <button
                  onClick={handleRegister}
                  className="btn btn-success w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? <Link to='/login'>login here..</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
