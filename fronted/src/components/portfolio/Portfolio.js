import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import { useParams } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {
  //   const { userId } = useParams();

  return (
    <>
      <div className="portfolio">
        <Profile />
        <Project />
      </div>
    </>
  );
};

export default Portfolio;
