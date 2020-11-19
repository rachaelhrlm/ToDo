import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { taskUpdate, taskDelete } from "../helpers/task";

const TaskAccordian = ({ task, handleChange }) => {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const onEdit = async (data) => {
    const edit = await taskUpdate(data);
    if (edit) {
      handleChange();
    }
  };

  const onDelete = async (id) => {
    const deleted = await taskDelete(id);
    if (deleted) {
      handleChange();
    }
  };

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
              ref={register}
            />
            <input
              type="hidden"
              name="completed"
              value={task.completed}
              ref={register}
            />
            <input type="hidden" name="id" value={task.id} ref={register} />
          </div>
        </div>
        <div className="row end-xs">
          <div className="col-xs-11 col-md-2 col-sm-3">
            <button type="submit" onClick={handleSubmit(onEdit)}>
              Edit
            </button>
          </div>
          <div className="col-xs-11 col-md-2 col-sm-3">
            <button
              type="submit"
              className="button2"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAccordian;
