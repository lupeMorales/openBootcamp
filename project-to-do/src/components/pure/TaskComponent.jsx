import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { useEffect } from "react";
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("created task");
    return () => {
      console.log(`task: ${task.name} is going to unmount`);
    };
  }, []);

  return (
    <div>
      <h2 className="task-name">Nombre: {task.name}</h2>
      <h3>Descripción:{task.description}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5>Estado: {task.completed ? "COMPLETADA" : "PENDIENTE"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
