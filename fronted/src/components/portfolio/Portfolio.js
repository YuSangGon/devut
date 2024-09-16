import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import "./portfolio.css";
import ProjectItem from "./ProjectItem";
import cloneDeep from "lodash/cloneDeep";
import { Button } from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  // projectList 가 변경된 이력을 localStorage에서 가져오기 없으면 빈 배열
  const [projectHist, setProjectHist] = useState(() => {
    const saved = localStorage.getItem("projectHist");
    return saved ? JSON.parse(saved) : [];
  });

  // 현재 변경된 이력의 어느 위치에 있는지에 대한 값 가져오기
  const [projectIdx, setProjectIdx] = useState(() => {
    const saved = localStorage.getItem("projectIdx");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("projectHist", JSON.stringify(projectHist));
  }, [projectHist]);

  useEffect(() => {
    localStorage.setItem("projectIdx", JSON.stringify(projectIdx));
    setProjectList(projectHist[projectIdx]);
  }, [projectIdx]);

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (projectHist.length === 0) {
        const resp = await axios.get(
          "http://localhost:8080/api/portfolio/project/list/1"
        );
        const data = resp.data;
        console.log(data);
        setProjectHist([data]);
        setProjectList(cloneDeep(data));
      } else {
        setProjectList(projectHist[projectIdx]);
      }
    };
    fetchData();
  }, []);

  // 되돌리기시 이력도 전부 날려버림
  const backToOrigin = () => {
    setProjectList(cloneDeep(projectHist[0]));
    setProjectHist([...cloneDeep(projectHist.slice(0, 1))]);
    setProjectIdx(0);
  };

  const addProjectHist = (newList) => {
    setProjectHist([
      ...cloneDeep(projectHist.slice(0, projectIdx + 1)),
      newList,
    ]);
    setProjectIdx((projectIdx) => projectIdx + 1);
  };

  // 드래그가 종료될 때 호출되는 이벤트
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return; // destination이 없다면 return

    const items = cloneDeep(projectList);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    // 위치가 변경됨에 따라 uploadOrder 값 세팅
    items.map((item, idx) => (item.uploadOrder = idx + 1));
    addProjectHist(items);
    setProjectList(items);
  };

  // ProjectItem 이 변경되었을 떄 호출되는 함수.
  const chgProject = (project) => {
    const items = cloneDeep(projectList);
    items.splice(project.uploadOrder - 1, 1, project);
    addProjectHist(items);
    setProjectList(items);
  };

  const save = async () => {
    const resp = await axios.post(
      "http://localhost:8080/api/portfolio/project/save",
      {
        projectTemplateId: 1,
        projectList: projectList,
      }
    );
    const result = resp.data;
  };

  const deleteProject = (project) => {
    const items = cloneDeep(projectList);
    items.splice(project.uploadOrder - 1, 1);
    items.map((item, idx) => (item.uploadOrder = idx + 1));
    addProjectHist(items);
    setProjectList(items);
  };

  const oneStepBefore = () => {
    if (projectIdx === 0) return;
    setProjectIdx((projectIdx) => projectIdx - 1);
  };

  const oneStepAfter = () => {
    if (projectIdx === projectHist.length - 1) return;
    setProjectIdx((projectIdx) => projectIdx + 1);
  };

  return (
    <>
      <div className="portfolioHeader">
        <Button>
          <FontAwesomeIcon icon="reply" onClick={oneStepBefore} />
        </Button>
        <Button>
          <FontAwesomeIcon icon="share" onClick={oneStepAfter} />
        </Button>
        <Button>미리보기</Button>
        <Button onClick={save}>저장</Button>
        <Button onClick={backToOrigin}>되돌리기</Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="portfolio">
          <div className="portfolioContent">
            <Profile />
            <Droppable droppableId="project">
              {(provided) => {
                return (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <div className="project">
                      <div className="projectHeader">
                        <p>Project</p>
                      </div>
                      <div className="projectContent">
                        <div className="projectList">
                          {projectList &&
                            projectList.map((project, idx) => (
                              <Draggable
                                key={idx}
                                draggableId={`${idx}`}
                                index={idx}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="draggable-project-item"
                                  >
                                    <ProjectItem
                                      info={project}
                                      idx={idx}
                                      editable={true}
                                      chgProject={chgProject}
                                      deleteProject={deleteProject}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}

                          <div className="addProject">
                            <div className="addIcon">
                              <FontAwesomeIcon icon="plus" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Portfolio;
