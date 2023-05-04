import React, { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Homecard = ({ chef }) => {
  const { id, name, img, likes, experience, recipes } = chef;
  console.log(chef);
  return (
    <div className="col col-md-4 col-12 mx-auto mt-5">
      <Card
        className="mx-auto border shadow-md bd-body-tertiary rounded"
        style={{ width: "18rem" }}
      >
        <div className="overflow-hidden ">
          <LazyLoad
            height={200}
            width={280}
            threshold={0.92}
            onContentVisible={() => {
              console.log("loaded!");
            }}
          >
            <Card.Img
              className=""
              style={{ height: "200px" }}
              variant="top"
              src={img}
            />
          </LazyLoad>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>experience: {experience}</p>
            <p>recipes: {recipes}</p>
            <p className="d-flex gap-3">
              <small>Likes: {likes} </small>
              <FaThumbsUp></FaThumbsUp>
            </p>
          </Card.Text>
          <Link to={`/viewdetails/${id}`}>
            <Button className="w-full">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Homecard;
