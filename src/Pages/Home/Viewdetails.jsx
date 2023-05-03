import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details";


const Viewdetails = () => {
  const dataAll = useLoaderData();
  console.log(dataAll);

  return (
    <div>
      <div className="col col-md-4 col-12 text-center">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={dataAll.img} style={{ height: "240px" }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>Years of experience: {dataAll.experience}</p>
            <p>Number of recipes: {dataAll.recipes}</p>
            <p>
              {" "}
              
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="row g-5 mx-auto mt-5 container">
        {dataAll.allrecipes.map((recipe) => (
          <Details recipe={recipe} key={recipe.id}></Details>
        ))}
      </div>
    </div>
  );
};

export default Viewdetails;
