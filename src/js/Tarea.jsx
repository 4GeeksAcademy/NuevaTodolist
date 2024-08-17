import React from "react";


const Tarea = ({ tarea }) => {
    return (
        <li className="lista-tareas_tareas">
            <div>{tarea.texto}</div>
            <div className="lista-tareas_contenedor-botones">
                <button onClick={() => removerTarea(index)}>
                    <i className="fas fa-trash"></i>
                </button>
                <button onClick={() => editarTarea(index)}>
                    <i className="fas fa-edit"></i>
                </button>
            </div>
        </li>
    )
}

export default Tarea;