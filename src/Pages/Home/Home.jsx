import React, { useEffect, useState } from "react";
import Homecard from "./Homecard";
import Card from "./Card";

const Home = () => {
    const [allData,setAlldata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setAlldata(data))
    },[])
  return (
    <>
      <div className=" row container ms-auto mt-5 ">
        <div className="col-6">
          <h2>My Hot Recipes Here</h2>
        </div>
        <div className="col-6">
          <img
            className=""
            style={{ width: "75%" }}
            src="https://images.wsj.net/im-121422"
            alt=""
          />
        </div>
      </div>
      <div className="row m-auto container ">
        {
            allData.map(chef=><Homecard chef={chef}></Homecard>)
        }
      </div>
    </>
  );
};

export default Home;
