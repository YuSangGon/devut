import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ProjectItem from "./ProjectItem";

const Project = (props) => {
  const [projectList, setProjectList] = useState([]);

  const edit = () => {
    props.isEdit(1, "Project", projectList);
  };

  useEffect(() => {
    async function fetchData() {
      const data = (
        await axios.get("http://localhost:8080/api/portfolio/list/1")
      ).data;
      setProjectList((projectList) => (projectList = data));
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="project">
        <div className="projectHeader">
          <p>Project</p>
        </div>
        <div className="projectContent">
          <div className="editProject">
            <FontAwesomeIcon icon="pen-to-square" onClick={edit} />
          </div>
          <div className="projectList">
            {projectList
              .filter((project) => project.usedYn)
              .map((project, idx) => {
                return (
                  <ProjectItem
                    info={project}
                    editable={false}
                    key={`projectItem${idx}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
