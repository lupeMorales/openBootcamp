import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "Description Default",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("no misiel, el estado no cambia aun");
  };
  return (
    <div>
      <h2>TU TAREA</h2>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
