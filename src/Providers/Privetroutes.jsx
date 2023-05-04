import React, { useContext } from "react";
import { authContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Privetroutes = ({ children }) => {
  const { user, loading} = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default Privetroutes;
