import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectModal from "./ProjectModal";

const ProjectItem = (props) => {
  const { info, idx, editable, chgProject, deleteProject } = props;

  const [project, setProject] = useState(info);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setProject(cloneDeep(info));
  }, [info]);

  const chgUsedYn = () => {
    project.usedYn = !project.usedYn;
    setProject({ ...project });
    chgProject(project);
  };

  const editProject = () => {
    setEdit(true);
  };

  const saveProject = (e) => {
    chgProject(e);
    setEdit(false);
  };

  return (
    <>
      <div className={project.usedYn ? "projectItem on" : "projectItem"}>
        {editable && (
          <div className="projectTop">
            <div className="editIcon">
              <FontAwesomeIcon icon="pen-to-square" onClick={editProject} />
            </div>
            <div className="trashIcon">
              <FontAwesomeIcon
                icon="trash"
                onClick={() => deleteProject(project)}
              />
            </div>
          </div>
        )}
        <div className="projectTitle">
          <div className="title">{project.projectTitle}</div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="usedYn"
              id={`usedYn${idx}`}
              value={idx}
              checked={project.usedYn}
              defaultChecked={true}
              onChange={chgUsedYn}
            />
            <label htmlFor={`usedYn${idx}`}></label>
          </div>
        </div>
        <div>
          기간 : {project.projectStartedAt + " ~ " + project.projectEndedAt}
        </div>
        <div>설명 : {project.projectDescription}</div>
        <div>언어 : {project.languages}</div>
        <Link to={project.projectLink}>바로가기</Link>
      </div>
      <ProjectModal
        data={project}
        isOpen={edit}
        onClose={() => setEdit(false)}
        saveProject={saveProject}
      />
    </>
  );
};

export default ProjectItem;
