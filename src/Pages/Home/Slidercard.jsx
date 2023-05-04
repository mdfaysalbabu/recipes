import React from "react";
import { Carousel } from "react-bootstrap";

const Slidercard = () => {
  return (
    <div className="mb-6">
      <div className="my-5">
        <h2 className="text-center text-success">Our Fast Food</h2>
      </div>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              style={{ height: "400px" }}
              src="https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="text-info">Pizza</h3>
              <p>Thin crust, melted cheese,tomato,butter,very testy</p>
              <button className="btn btn-success">Try Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              style={{ height: "400px" }}
              src="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?w=2000"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="text-info">Burger</h3>
              <p>melted cheese, fresh toppings, Testy Burger.</p>
              <button className="btn btn-Success">Try Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              style={{ height: "400px" }}
              src="https://food-images.files.bbci.co.uk/food/recipes/tiktok_breakfast_42301_16x9.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="text-info">Sandwich </h3>
              <p>Crispy bacon, sliced bread, veg,testy very.</p>
              <button className="btn btn-success">Try Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slidercard;
