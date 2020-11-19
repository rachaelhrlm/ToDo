import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { taskToggleStatus } from "../helpers/task";
import TaskAccordian from "./TaskAccordian";

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

      <TaskAccordian task={task} handleChange={handleChange} />
    </div>
  );
};

export default Task;
