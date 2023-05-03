import React from "react";
import { Button, Card } from "react-bootstrap";

const Sidecard = () => {
  return (
    <div>
      <h2 className="text-center fs-2 fw-bold mt-5 text-success">Popular Food</h2>
      <p className="text-center text-danger">
        We provide a variety food and beverage recipes <br /> with high test
        from famous chef
      </p>
      <div className="row ">
        <div className="col col-md-3 col-12 mx-auto mt-5">
          <Card
            className="mx-auto border shadow-xl bd-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <div className="overflow-hidden ">
              <Card.Img
                className=""
                style={{ height: "200px" }}
                variant="top"
                src="https://p.kindpng.com/picc/s/248-2485861_indian-cuisine-dish-hd-png-download.png"
              />
            </div>
            <Card.Body>
              <h3 className="text-center text-success">cuisine-dish</h3>
              <Card.Title className="text-center">
                <Button className="bg-info">Indian</Button>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-md-3 col-12 mx-auto mt-5">
          <Card
            className="mx-auto border shadow-xl bd-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <div className="overflow-hidden ">
              <Card.Img
                className=""
                style={{ height: "200px" }}
                variant="top"
                src="https://www.kindpng.com/picc/m/193-1931827_indian-food-no-background-hd-png-download.png"
              />
            </div>
            <Card.Body>
              <h3 className="text-center text-success">non-veg-thali</h3>
              <Card.Title className="text-center">
                <Button className="bg-info">Indian</Button>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-md-3 col-12 mx-auto mt-5">
          <Card
            className="mx-auto border shadow-xl bd-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <div className="overflow-hidden ">
              <Card.Img
                className=""
                style={{ height: "200px" }}
                variant="top"
                src="https://thumbs.dreamstime.com/b/indian-food-white-background-photo-menu-paper-utensils-182705763.jpg"
              />
            </div>
            <Card.Body>
              <h3 className="text-center text-success">tikka-masala</h3>
              <Card.Title className="text-center">
                <Button className="bg-info">Indian</Button>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-md-3 col-12 mx-auto mt-5">
          <Card
            className="mx-auto border shadow-xl bd-body-tertiary rounded"
            style={{ width: "18rem" }}
          >
            <div className="overflow-hidden ">
              <Card.Img
                className=""
                style={{ height: "200px" }}
                variant="top"
                src="https://img.freepik.com/premium-photo/indian-cuisine-pulao-white-background_55610-495.jpg?w=2000"
              />
            </div>
            <Card.Body>
              <h3 className="text-center text-success">cuisine-pulao</h3>
              <Card.Title className="text-center">
                <Button className="bg-info">Indian</Button>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
