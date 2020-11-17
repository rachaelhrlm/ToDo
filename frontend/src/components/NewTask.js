import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { taskCreate, taskFindAll } from "../helpers/task";

const NewTask = ({ setTasks, handleChange }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const create = await taskCreate(data);
    if (create) {
      handleChange();
    }
  };

  return (
    <div className="row new-task center-xs">
      <div className="col-xs-11 col-md-10 col-sm-8">
        <textarea
          className="input"
          placeholder="Enter new task"
          name="description"
          ref={register}
        />
      </div>
      <div className="col-xs-11 col-md-2 col-sm-3">
        <button
          className="button"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewTask;
