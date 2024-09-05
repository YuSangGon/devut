import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { userId } = useParams();
  return (
    <>
      <div>{userId}의 포트폴리오</div>
      <div className="portfolio">
        <Profile />
        <Project />
      </div>
    </>
  );
};

export default Portfolio;
