import React, { useRef, useState } from "react";
import Profile from "./Profile";
import Project from "./Project";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./portfolio.css";
import CancelBtn from "../common/CancelBtn";
import ProjectItem from "./ProjectItem";

const Portfolio = () => {
  //   const { userId } = useParams();
  const [edit, setEdit] = useState(0);
  const [editHeaderText, setEditHeaderText] = useState("");
  const [projectList, setProjectList] = useState([]);

  const isEdit = (e, text, data) => {
    setEdit(e);
    setEditHeaderText(text);
    if (text === "Project") {
      setProjectList((project) => (project = data));
    }
  };

  return (
    <>
      <div className="portfolio">
        <div className={edit ? "portfolioContent editOn" : "portfolioContent"}>
          <Profile />
          <Project isEdit={isEdit} />
        </div>
        {edit ? (
          <div className="editDiv">
            <div className="editHeader">
              <div>{editHeaderText}</div>
              <CancelBtn btnFunc={(e) => isEdit(0, "")} text={"취소"} />
            </div>
            <div className="editContent">
              {editHeaderText === "Project" &&
                projectList.map((project, idx) => {
                  return (
                    <ProjectItem
                      info={project}
                      editable={true}
                      key={`projectEditItem${idx}`}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Portfolio;
