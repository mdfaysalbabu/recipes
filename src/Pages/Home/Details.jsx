import React, { useState } from 'react';
import { Button, Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Details = ({recipe}) => {
    const { id, name_food, img_food
        , describe, ingrediants, rating } = recipe;
    
    const [isFavorite, setIsFavorite] = useState(false);
    

  const handleFavoriteBtn = () => {
      setIsFavorite(true);
      toast.success('favorite recipe!');
     
  }
    return (
        <div className="col col-md-4  col-12 container py-4 relative">
        <Card className='' style={{ width: "21rem",height:"700px" }}>
          <Card.Img variant="top" src={img_food} style={{ height: "220px" }} />
          <Card.Body className="btn-parent">
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
            <p className="fw-semibold d-flex gap-2">
              <span className="fw-semibold">Rating:</span>
              {rating} <Rating style={{ maxWidth: 80 }} value={rating} readOnly /> 
            </p>
            <Button className='btn-new'
              onClick={handleFavoriteBtn}
              disabled={isFavorite}
              variant="success"
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