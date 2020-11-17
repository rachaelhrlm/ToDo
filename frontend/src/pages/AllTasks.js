import React from "react";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import { taskFindAll } from "../helpers/task";

const AllTasks = ({ tasks, setTasks }) => {
  const handleChange = async () => {
    const res = await taskFindAll();
    if (res) setTasks(res);
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task
          allTasks={tasks}
          task={task}
          handleChange={handleChange}
          key={task.id}
        />
      ))}
      <NewTask handleChange={handleChange} />
    </div>
  );
};

export default AllTasks;
