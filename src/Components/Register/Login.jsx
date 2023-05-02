import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form action="">
                <input
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <input
                  className="password p-3 m-2"
                  type="password"
                  placeholder="enter your password"
                />
                <button className="btn btn-success w-75 p-2 mt-3">Login</button>
                <p className="p-2">
                  <small className="text-info">
                    are you new? <Link to='/register'>register here..</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
