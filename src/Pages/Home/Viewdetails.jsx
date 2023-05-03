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
      <div className="bg-secondary mt-3 container mx-auto row d-flex justify-content-between">
        <div className="col col-md-4 col-12 text-center p-3 ">
          <Card style={{ width: "36rem" }}>
            <Card.Img className="w-full"
              variant="top"
              src={dataAll.img}
              style={{ height: "400px"}}
            />
          </Card>
        </div>
        <div className='col col-md-4 col-12 text-center p-3 text-start'>
            <h2 className="fs-2 fw-bold text-orange text-start text-warning">{dataAll.name}</h2>
            <h3 className="text-start text-info">Years of experience: {dataAll. experience}</h3>
            <h4 className="text-start text-info">Number of recipes: {dataAll.recipes}</h4>
            <h6 className="text-start text-info">{dataAll.bio}</h6>
        </div>
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
