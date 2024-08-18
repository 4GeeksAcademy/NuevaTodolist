import React, { useState } from "react";


const Tarea = ({ tarea, editarTarea }) => {
    const [editandoTarea, setEditandoTarea] = useState(false);
    const [nuevaTarea, setNuevaTarea] = useState(tarea.label);

    
        const enviarFormulario = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://playground.4geeks.com/todo/todos/${tarea.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    label: nuevaTarea,
                    is_done: tarea.is_done
                }),
                headers: {
                    "Content-Type": "application/json"
                }

            });
        if (!response.ok) {
            throw new Error("Error al actualizar la tarea");
        }
        const data = await response.json();
        editarTarea(data.id, data.label);

    } catch (error) {
    console.error("Error al cargar la lista", error);
 }
setEditandoTarea(false);
}
return (
    <li className="lista-tareas_tareas">
        {editandoTarea === true ?
            <form className="formulario_editar" onSubmit={enviarFormulario}>
                <input className="formulario-editat-tarea_input"
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => { setNuevaTarea(e.target.value) }}
                >

                </input>
                <button className="boton_actualizar">Actualizar</button>
            </form>
            :
            tarea.label

        }
        <div className="lista-tareas_contenedor-botones">
            <button onClick={() => {}}>
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={() => (setEditandoTarea(!editandoTarea))}>
                <i className="fas fa-edit"></i>
            </button>
        </div>
    </li>
)
}

export default Tarea;