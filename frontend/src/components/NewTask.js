import React from "react";
import { useForm } from "react-hook-form";
import { taskCreate } from "../helpers/task";

const NewTask = ({ handleChange }) => {
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
          placeholder="Enter task"
          name="description"
          ref={register}
        />
      </div>
      <div className="col-xs-11 col-md-2 col-sm-3">
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewTask;
