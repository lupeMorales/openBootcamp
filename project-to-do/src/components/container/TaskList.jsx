import React, { useState, useEffect } from "react";
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
  const [tasks, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del componente

  useEffect(() => {
    console.log("task has been modified");
    setLoading(false);
    return () => {
      //cuando desaparezca el componente
      console.log("taskList component is going to unmount....");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("no misiel, el estado no cambia aun");
  };
  return (
    <div>
      <h1>TU TAREA</h1>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
