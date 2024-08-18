import React from "react";
import Tarea from "./Tarea";



const ListadeTareas = ({ listaTareas, setListaTareas }) => {

    const editarTarea = (id, nuevoTexto) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, label: nuevoTexto }
            }
            return tarea;
        }))
    }



    return (
        <ul className="lista-tareas">
            {
                listaTareas.length > 0
                    ?
                    listaTareas.map((tarea) => {
                        return (
                            <Tarea key={tarea.id} tarea={tarea} editarTarea={editarTarea} listaTareas={listaTareas} setListaTareas={setListaTareas} />
                        )
                    })
                    :
                    <div className="lista-tareas__mensaje">No hay tareas</div>
            }
        </ul>
    )
};

export default ListadeTareas;