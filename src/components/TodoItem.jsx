import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () =>{
    cambiarEstado(id)
  }
  return (
    <li className="list-group-item">
      <input type="checkbox" id="check" className="form-checked-input me-2" onChange={fnCambiarEstado} checked={completed}/>
      {task}

    </li>  

  )
}
