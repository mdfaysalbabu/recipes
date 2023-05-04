import React, { useEffect, useState } from "react";
import Homecard from "./Homecard";
import Card from "./Card";
import Sidecard from "./Sidecard";
import Extracard from "./Extracard";
import { Link } from "react-router-dom";
import "./Home.css";
import Slidercard from "./Slidercard";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://chef-server-project-mdfaysalbabu.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <>
      <div className=" my-5 container mx-auto d-flex align-items-center bg-gray-200 row justify-content-center">
        <div className="col-md-6 col-12 ">
          <h2 className="fs-1 fw-bold">
            Fun and Easy to Become <br />{" "}
            <span className="text- primary">Master Cook</span>
          </h2>
          <p className="fw-semibold">
            Try it explore global flavors with global plate
          </p>
          <Link to="/top">
            <button className="btn btn-info">Explore Now</button>
          </Link>
        </div>

        <div className="col-md-6 col-12">
          <img
            className=""
            style={{ width: "80%" }}
            src="https://previews.123rf.com/images/grafner/grafner1505/grafner150500042/40558742-fast-food-meal-on-white-background.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row m-auto container ">
        <div>
          <h2 className="text-success text-center">Meet And Chose Our Chef</h2>
        </div>
        {allData.length == 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          allData.map((chef) => <Homecard chef={chef}></Homecard>)
        )}
      </div>
      <div>
        <Sidecard></Sidecard>
      </div>
      <div>
        <Slidercard></Slidercard>
      </div>
      <div>
        <Extracard></Extracard>
      </div>
    </>
  );
};

export default Home;
