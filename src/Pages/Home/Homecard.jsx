import React, { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    
  } from "react-icons/fa";

const Homecard = ({ chef }) => {
  const { id, name, img, likes, experience,recipes } = chef;
  console.log(chef);
  return (
    <div className="col col-md-4 col-12 mx-auto mt-5">
      <Card className="mx-auto border shadow-md bd-body-tertiary rounded" style={{width:"18rem"}}>
        <div className="overflow-hidden ">
          <Card.Img className=""style={{height:"200px"}} variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>experience: {experience}</p>
            <p>recipes: {recipes}</p>
            <p><small>Likes:{likes}</small></p>
          </Card.Text>
          <Link to={`/viewdetails/${id}`}><Button className="w-full">View Recipes</Button></Link>
        </Card.Body>
      </Card>
    </div>

  );
};

export default Homecard;
