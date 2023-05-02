import React, { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homecard = ({ chef }) => {
  const { id, name, img, likes, experience,recipes } = chef;
  console.log(chef);
  return (
    <div className="col-4  mt-5">
      <Card className="w-full h-56">
        <div className="overflow-hidden ">
          <Card.Img className="w-25 image-fluid object-cover h-56 md:h-64 lg:h-80" variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{experience}</p>
            <p>recipes:{recipes}</p>
            <p><small>Likes:{likes}</small></p>
          </Card.Text>
          <Link to={`/view/${id}`}><Button className="w-full">View Recipes</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Homecard;
