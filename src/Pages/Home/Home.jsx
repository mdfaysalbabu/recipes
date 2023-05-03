import React, { useEffect, useState } from "react";
import Homecard from "./Homecard";
import Card from "./Card";
import Sidecard from "./Sidecard";
import Extracard from "./Extracard";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  const [allData, setAlldata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  return (
    <>
      <div className=" my-5 container d-flex align-items-center bg-gray-200">
        <div className="col-6">
          <h2 className="fs-1 fw-bold">
            Bring the flowers of the world <br />{" "}
            <span className="text- primary">to your kitchen</span>
          </h2>
          <p className="fw-semibold">
            explore global flavors with global plate
          </p>
          <Link to="/top">
            <button className="btn btn-info">Explore Now</button>
          </Link>
        </div>
        <div className="col-6">
          <img
            className=""
            style={{ width: "80%" }}
            src="https://static.vecteezy.com/system/resources/previews/004/690/533/large_2x/the-culinary-background-with-variety-of-spices-and-herbs-prepared-on-the-white-table-food-condiment-recipes-from-the-top-view-suitable-for-social-media-or-website-presentation-free-photo.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row m-auto container ">
        <div>
          <h2 className="text-success text-center">Meet And Chose Our Chef</h2>
        </div>
        {allData.map((chef) => (
          <Homecard chef={chef}></Homecard>
        ))}
      </div>
      <div>
        <Sidecard></Sidecard>
      </div>
      <div>
        <Extracard></Extracard>
      </div>
    </>
  );
};

export default Home;
