import React, { useState } from 'react';
import { Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = ({recipe}) => {
    const { id, name_food, img_food
        , describe, ingrediants, rating } = recipe;
    console.log(recipe)
    const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteBtn = () => {
      setIsFavorite(true);
      toast.success('This recipe is now your favorite!');
     
  }
    return (
        <div className="col col-md-4  col-12 container py-4">
        <Card style={{ width: "21rem" }}>
          <Card.Img variant="top" src={img_food} style={{ height: "220px" }} />
          <Card.Body>
            <Card.Title className="fw-semibold">{name_food}</Card.Title>
            <Card.Text>
              <p>
                {" "}
                <span className="fw-semibold">Cooking Method: </span> {describe}
              </p>
            </Card.Text>
            <p>
              <span className="fw-semibold">Ingredients: </span>
              {ingrediants}
            </p>
            <p className="fw-semibold">
              <span className="fw-semibold">Rating: </span>
              {rating}
            </p>
            <Button
              onClick={handleFavoriteBtn}
              disabled={isFavorite}
              variant="primary"
            >
              {" "}
              <ToastContainer></ToastContainer>Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Details;