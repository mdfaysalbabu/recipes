import React, { useState } from "react";
import {
    FaceFrownIcon,
    
  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Errorpage = () => {
    const {error,status}=useState()
  return (
    <section className="d-flex items-center p-16  ">
      <div className="container d-flex flex-col items-center justify-content-center px-5 mx-auto my-8">
        <FaceFrownIcon className="w-25"style={{height:"25px"}} />
        <div className="max-w-md text-center">
          <h2 className="mb-8 fw-bold fs-2 text-danger">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="fs-3 fw-bold md:fs-2 text-danger mb-8">
            {error?.message}
          </p>
          <Link to="/" className="buttonMain">
            <button className="p-5">Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
