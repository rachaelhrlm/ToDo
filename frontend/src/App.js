import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { taskFindAll } from "./helpers/task";
import Layout from "./layout/Layout";
import AllTasks from "./pages/AllTasks.js";
import "./scss/main.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const tasksData = await taskFindAll();
    if (tasksData) {
      setTasks(tasksData);
    }
  }, []);

  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            Hello!
          </Route>
          <Route path="/tasks" exact>
            <AllTasks tasks={tasks} setTasks={setTasks} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
