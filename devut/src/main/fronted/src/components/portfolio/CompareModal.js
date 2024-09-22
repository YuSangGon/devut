import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import cloneDeep from "lodash/cloneDeep";
import ProjectItem from "./ProjectItem";

const CompareModal = (props) => {
  const { prevData, curData, isOpen, onClose, save, isBack } = props;

  const [modalOpen, setModalOpen] = useState(isOpen);
  const [goBack, setGoBack] = useState(isBack);
  const [prev, setPrev] = useState({});
  const [cur, setCur] = useState({});
  const [prevPj, setPrevPj] = useState([]);
  const [curPj, setCurPj] = useState([]);

  useEffect(() => {
    setModalOpen(isOpen);
    setGoBack(isBack);
  }, [isOpen, isBack]);

  useEffect(() => {
    const prevProject = cloneDeep(prevData.project);
    const curProject = cloneDeep(curData.project);

    curProject.forEach((p) => {
      const origin = prevProject.find((el) => el.id === p.id);
      if (origin === undefined) p.stat = "추가";
      else {
        let modify = false;
        Object.keys(p).filter((key) => p[key] !== origin[key]).length &&
          (modify = !modify);
        if (modify) p.stat = "수정";
      }
    });

    prevProject.forEach((p) => {
      const origin = curProject.find((el) => el.id === p.id);
      if (origin === undefined) p.stat = "삭제";
    });

    setCurPj(curProject);
    setPrevPj(prevProject);

    setPrev(prevData);
    setCur(curData);
  }, [prevData, curData]);

  const statColor = (stat) => {
    let color = "black";
    switch (stat) {
      case "추가":
        color = "blue";
        break;
      case "삭제":
        color = "red";
        break;
      case "수정":
        color = "green";
        break;
      default:
        break;
    }
    return color;
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
          <div className="title">{goBack ? "되돌리기" : "저장하기"}</div>
          <div className="closeBtn">
            <FontAwesomeIcon icon="xmark" onClick={onClose} />
          </div>
        </div>
        <div className="modalBody compareModal">
          <div className="prev">
            <h4>기존</h4>
            <div className="prevBody">
              {prevPj &&
                prevPj.map((p) => {
                  return (
                    <div className={statColor(p.stat)}>
                      <div>{p.projectTitle}</div>
                      <div>
                        기간 : {p.projectStartedAt + " ~ " + p.projectEndedAt}
                      </div>
                      <div>설명 : {p.projectDescription}</div>
                      <div>언어 : {p.languages}</div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="arrowIcon">
            <div>
              <FontAwesomeIcon icon="angles-right" />
            </div>
          </div>
          <div className="cur">
            <h4>현재</h4>
            <div className="curBody"></div>
          </div>
        </div>
        <div className="modalFooter">
          <Button onClick={() => save()}>저장</Button>
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
    width: "1000px",
    height: "700px",
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

export default CompareModal;
