import React, { Fragment, useRef, useState } from "react";

/* Generar id unicas */
import uuid4 from "uuid4";

/* Importar TodoItem */
import { TodoItem } from "./TodoItem";

/* Exportar TodoList */
export function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const taskRef = useRef()

  const addTask = () => {
    const tarea = taskRef.current.value.trim();


    if (tarea === '') return;

    taskRef.current.value = null

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid4(),
        task: tarea,
        completed: false
      }
      return [...prevTodos, newTask] //Investigar
    })


  }

  /* Borrar tareas tachadas */
  const deleteAllComplete = () => {
    const newTodo = todos.filter(todo => todo.completed === false)
    setTodos(newTodo)
  }

  const cambiarEstadoTarea = (id) => {
    /* Tomamos todos los elementos actuales del array */
    const newTodos = [...todos]
    //Buscar el elemento con el id dentro del array
    const todo = newTodos.find((todo) => todo.id === id)
    //Cambiar el estado dentro del array
    todo.completed = !todo.completed





    //Se actualiza el array con los cambios hechos
    setTodos(newTodos)
  }

  /* Contamos las tareas que se han realizado */
  const contadorTareas = () => {
    return todos.filter((todo) => !todo.completed).length

  }

  /* Mostrar un mensaje según la cantidad de tareas pendientes */
  const ResumenTareas = () => {
    const cant = contadorTareas()

    if (cant === 0) {
      return (
        <div className="alert alert-success mt-3">
          Felicidades no tienes tareas pendientes :3
        </div>
      )
    }

    if (cant === 1) {
      return (
        <div className="alert alert-info mt-3">
          Te queda solamente 1 tarea
        </div>
      )
    }

    return (
      <div className="alert alert-warning mt-3">
        Te quedan {cant} tareas pendientes
      </div>
    )

  }

  return (
    <div className="container">
      <Fragment>
        <div class="d-flex justify-content-center text-light">
          <h1>Lista de Tareas</h1>
        </div>

        {/* Input para recibir los datos */}
        <div className="input-group my-4">
          <input className="form-control" placeholder="Ingrese una tarea" ref={taskRef}></input>
          <button className="btn btn-success ms-2" onClick={addTask}><i class="bi bi-clipboard2-plus"></i></button>
          <button className="btn btn-danger ms-2" onClick={deleteAllComplete}><i class="bi bi-trash-fill"></i></button>
        </div>

        {/* Lista de tareas */}
        <ul className="list-group ">
          {/* recorrer la lista */}
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} />
          ))}
        </ul>

        <ResumenTareas />

      </Fragment>
    </div>
  );
}
