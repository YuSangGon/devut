import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloneDeep from "lodash/cloneDeep";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ChromePicker } from "react-color";
import Modal from "react-modal";

const SettingModal = (props) => {
  const { isOpen, onClose, data, saveStyle } = props;

  const [modalOpen, setModalOpen] = useState(isOpen);
  const [setting, setSetting] = useState({});

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setSetting(cloneDeep(data));
  }, [data]);

  const changeHeaderBackgroundColor = (color) => {
    console.log(color);
    setSetting({ ...setting, headerBackgroundColor: color.hex });
  };

  const changeHeaderColor = (color) => {
    console.log(color);
    setSetting({ ...setting, headerColor: color.hex });
  };

  const save = () => {
    saveStyle(setting);
  };

  return (
    <Modal
      isOpen={modalOpen}
      shouldCloseOnOverlayClick={true}
      style={modalStyle}
    >
      <div className="modalContent">
        <div className="modalHeader">
          <div className="title">템플릿 설정</div>
          <div className="closeBtn">
            <FontAwesomeIcon icon="xmark" onClick={onClose} />
          </div>
        </div>
        <div className="modalBody">
          배경색(카테고리) :{" "}
          <ChromePicker
            color={setting.headerBackgroundColor}
            onChangeComplete={changeHeaderBackgroundColor}
          />
          <br />
          글자색(카테고리) : <br />
          <ChromePicker
            color={setting.headerColor}
            onChangeComplete={changeHeaderColor}
          />
        </div>
        <div className="modalFooter">
          <Button onClick={save}>저장</Button>
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
    width: "700px",
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

export default SettingModal;
