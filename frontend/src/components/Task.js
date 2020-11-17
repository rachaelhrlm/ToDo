import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { taskToggleStatus } from "../helpers/task";

const Task = ({ task, handleChange }) => {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <div
      className={
        completed === 1
          ? "row xs-between completed-task"
          : "row xs-between task"
      }
    >
      <div
        className="col-xs-4 col-sm-2 col-md-1 check"
        onClick={async () => {
          let response = await taskToggleStatus(task);
          if (response) {
            handleChange();
            setCompleted(completed ? 0 : 1);
          }
        }}
      >
        <FontAwesomeIcon
          className="icon"
          icon={completed === 1 ? faCheckSquare : faSquare}
          size="2x"
        />
      </div>
      <div className="col-xs-8 col-sm-10 col-md-11 details">
        <h3>
          {task.id}. {task.description}
        </h3>
      </div>
    </div>
  );
};

export default Task;
