import React from "react";
import Activities from "../components/activities/Activities";
import Carousel from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Activities />
    </>
  );
};

export default Home;
