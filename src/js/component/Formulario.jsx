import React, { useState } from "react";
import ListadeTareas from "./ListadeTareas";



const Formulario = ({ listaTareas, setListaTareas }) => {
    const [inputTarea, setInputTarea] = useState("");
    const encapsular = (e) => {
        setInputTarea(e.target.value);
    }
    const enviarDatos = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://playground.4geeks.com/todo/todos/KineJuanPintos", {
                method: "POST",
                body: JSON.stringify({
                    label: inputTarea,
                    is_done: false
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await response.json();
            setListaTareas([...listaTareas, data]);
        } catch (error) {
            console.error("Error al cargar la lista", error);
        }
        setInputTarea("");
    }

return (
    <form className="formulario-tareas" onSubmit={(e) => { enviarDatos(e) }}>
        <input
            className="formulario-tareas_input"
            type="text"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => { encapsular(e) }}

        />
    </form>
)
}

export default Formulario;