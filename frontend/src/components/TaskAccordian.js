import React, { useState } from "react";

const TaskAccordian = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="task-accordian col-xs-8 col-sm-10 col-md-11 ">
      <div
        className="row acc-header "
        onClick={() => setIsOpen(isOpen ? false : true)}
      >
        <h3>
          {task.id}. {task.description}
        </h3>
      </div>
      <div
        className="row acc-content center-xs"
        style={isOpen ? { display: "none" } : { display: "block" }}
      >
        <div className="row">
          <div className="col-xs-12">
            <textarea
              className="input"
              placeholder="Enter task"
              name="description"
            />
          </div>
        </div>
        <div className="row end-xs">
          <div className="col-xs-11 col-md-2 col-sm-3">
            <button type="submit">Edit</button>
          </div>
          <div className="col-xs-11 col-md-2 col-sm-3">
            <button type="submit" className="button2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAccordian;
