import axios from "axios";
import { SERVER } from ".";

const server = SERVER + "/tasks/";

export const taskFindAll = async () => {
  try {
    const res = await axios.get(server);
    return res.data;
  } catch {
    return null;
  }
};

export const taskCreate = async (task) => {
  try {
    let completed = 0;
    const res = await axios.post(server, {
      description: task.description,
      completed: completed,
    });
    return res.data;
  } catch {
    return null;
  }
};

export const taskToggleStatus = async (task) => {
  try {
    const res = await axios.put(server + `${task.id}/status/`, {
      completed: task.completed,
    });
    return res.data;
  } catch {
    return null;
  }
};
