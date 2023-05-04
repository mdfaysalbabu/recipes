import React, { useContext } from "react";
import { authContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privetroutes = ({children}) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (loader) {
    return <div>loading....</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from:location}} to="/login"></Navigate>;
};

export default Privetroutes;
