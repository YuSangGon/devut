import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import cloneDeep from "lodash/cloneDeep";

const ProjectModal = (props) => {
  const { data, isOpen, onClose, saveProject, order } = props;

  const [modalOpen, setModalOpen] = useState(isOpen);
  const [project, setProject] = useState({
    projectTitle: "",
    projectDescription: "",
    projectStartedAt: "2024-10-24",
    projectEndedAt: "2024-12-25",
    usedYn: true,
    uploadOrder: order,
    languages: "HTML, CSS, JAVASCRIPT",
    projectLink: "https://www.naver.com",
    projectTemplateId: 1,
  });

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    data && setProject(cloneDeep(data));
  }, [data]);

  const changeValue = (e) => {
    const p = { ...cloneDeep(project), [e.target.name]: e.target.value };
    setProject(p);
  };

  return (
    <Modal
      isOpen={modalOpen}
      //   onRequestClose={}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={modalStyle}
    >
      <div className="modalContent">
        <div className="modalHeader">
          <div className="title">{data ? "수정" : "추가"}</div>
          <div className="closeBtn">
            <FontAwesomeIcon icon="xmark" onClick={onClose} />
          </div>
        </div>
        <div className="modalBody">
          <div>
            프로젝트명 :{" "}
            <input
              type="text"
              name="projectTitle"
              value={project.projectTitle}
              onChange={changeValue}
            />
          </div>
          <div>
            프로젝트설명 :{" "}
            <input
              type="text"
              name="projectDescription"
              value={project.projectDescription}
              onChange={changeValue}
            />
          </div>
        </div>
        <div className="modalFooter">
          <Button onClick={() => saveProject(project)}>저장</Button>
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "400px",
    height: "500px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

export default ProjectModal;
