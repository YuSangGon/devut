import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ info, editable }) => {
  const [usedYn, setUsedYn] = useState(info.usedYn);

  const changeUsedYn = () => {
    setUsedYn((usedYn) => !usedYn);
  };

  return (
    <>
      <div className="projectItem">
        {editable && (
          <div className="projectEdit">
            <input
              type="checkbox"
              name="usedYn"
              defaultChecked={info.usedYn}
              onChange={changeUsedYn}
            />
          </div>
        )}
        <div className="projectTitle">{info.projectTitle}</div>
        <div>기간 : {info.projectStartedAt + " ~ " + info.projectEndedAt}</div>
        <div>설명 : {info.projectDescription}</div>
        <div>언어 : {info.languages}</div>
        <Link to={info.projectLink}>바로가기</Link>
      </div>
    </>
  );
};

export default ProjectItem;
