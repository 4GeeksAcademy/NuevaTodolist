import React from "react";
import Tarea from "../Tarea";



const ListadeTareas = ({ listaTareas, setListaTareas }) => {
    return (
        <ul className="lista-tareas">
            {
                listaTareas.length > 0
                    ?
                    listaTareas.map((tarea) => {
                        return (
                            <Tarea key={tarea.id} tarea={tarea}/>
                        )
                    })
                    :
                    <div className="lista-tareas__mensaje">- no hay tareas agregadas- </div>
            }
        </ul>
    )
};

export default ListadeTareas;