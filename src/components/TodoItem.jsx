import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () =>{
    cambiarEstado(id)
  }
  return (
    <li
      className="list-group-item form-checked-input me-2"
      key={id}
      onClick={fnCambiarEstado}
      style={{ backgroundColor: completed ? "lightblue" : "white" }}
    >
      <input
        type="checkbox"
        className=""
      /> 
    {task}
    </li>
  );
}
