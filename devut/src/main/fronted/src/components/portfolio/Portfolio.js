import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import "./portfolio.css";
import ProjectItem from "./ProjectItem";
import cloneDeep from "lodash/cloneDeep";
import { Button } from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectModal from "./ProjectModal";
import CompareModal from "./CompareModal";
import SettingModal from "./SettingModal";

const Portfolio = () => {
  const [projectList, setProjectList] = useState([]);
  const [originList, setOriginList] = useState([]);
  const [addProject, setAddProject] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const addProjectBtn = useRef(null);
  const [setting, setSetting] = useState({});
  const portfolioDom = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/portfolio/1");
      const data = res.data;
      setSetting(cloneDeep(data));
      setProjectList(cloneDeep(data.projectInfoList));
      setOriginList(cloneDeep(data.projectInfoList));
      initStyle(data);
    };
    fetchData();
  }, []);

  // 초기 스타일
  const initStyle = (data) => {
    portfolioDom.current.querySelector(".projectHeader").style.backgroundColor =
      data.headerBackgroundColor;
    portfolioDom.current.querySelector(".projectHeader").style.color =
      data.headerColor;
  };

  const saveStyle = (data) => {
    setSetting(cloneDeep(data));
    initStyle(data);
    setSettingModalOpen(false);
  };

  // 되돌리기시 이력도 전부 날려버림
  const backToOrigin = () => {
    // setProjectList(cloneDeep(originList));
    // setCompareModalOpen(true);
    // setGoBack(true);
  };

  // 드래그가 종료될 때 호출되는 이벤트
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return; // destination이 없다면 return

    const items = cloneDeep(projectList);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    // 위치가 변경됨에 따라 uploadOrder 값 세팅
    items.map((item, idx) => (item.uploadOrder = idx + 1));
    setProjectList(items);
    addProjectBtn.current.style.display = "flex";
  };

  const onDragStart = () => {
    addProjectBtn.current.style.display = "none";
  };

  // ProjectItem 이 변경되었을 떄 호출되는 함수.
  const chgProject = (project) => {
    const items = cloneDeep(projectList);
    items.splice(project.uploadOrder - 1, 1, project);
    setProjectList(items);
  };

  const save = async () => {
    await axios.post("/api/portfolio/1/save", setting);
  };

  const deleteProject = (project) => {
    const items = cloneDeep(projectList);
    items.splice(project.uploadOrder - 1, 1);
    items.map((item, idx) => (item.uploadOrder = idx + 1));
    setProjectList(items);
  };

  const saveProject = (e) => {
    chgProject(e);
    setAddProject(false);
  };

  return (
    <>
      <div className="portfolioHeader">
        <Button onClick={() => setSettingModalOpen(true)}>설정</Button>
        <Button>미리보기</Button>
        <Button>임시저장</Button>
        <Button onClick={save}>저장</Button>
        <Button onClick={backToOrigin}>되돌리기</Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <div className="portfolio" ref={portfolioDom}>
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
                        </div>
                        <div className="addProject" ref={addProjectBtn}>
                          <div
                            className="addIcon"
                            onClick={() => setAddProject(true)}
                          >
                            <FontAwesomeIcon icon="plus" />
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
      {projectList !== undefined && (
        <ProjectModal
          isOpen={addProject}
          onClose={() => setAddProject(false)}
          saveProject={saveProject}
          order={projectList.length + 1}
        />
      )}
      {projectList && originList && (
        <CompareModal
          prevData={{
            project: originList,
          }}
          curData={{
            project: projectList,
          }}
          isOpen={compareModalOpen}
          isBack={goBack}
          onClose={() => setCompareModalOpen(false)}
          save={save}
        />
      )}
      {settingModalOpen && (
        <SettingModal
          isOpen={settingModalOpen}
          onClose={() => setSettingModalOpen(false)}
          data={setting}
          saveStyle={saveStyle}
        />
      )}
    </>
  );
};

export default Portfolio;
