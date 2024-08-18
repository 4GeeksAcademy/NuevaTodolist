import React, { useEffect, useState } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import ListadeTareas from "./ListadeTareas";




const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	useEffect(() => {
		const cargarTareas = async () => {
			try {
				const response = await fetch("https://playground.4geeks.com/todo/users/KineJuanPintos")
				if (!response.ok) {
					throw new Error("Datos no cargados");
				}
				const data = await response.json();
				setListaTareas(data.todos);
			} catch (error) {
				console.log("Error al cargar lista:", error);
				crearUsuario();

			}
		}

		
		cargarTareas();
	}, []);
	console.log(listaTareas)

	const crearUsuario = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/todo/users/KineJuanPintos", {
				method: "POST",
				header: {
					"Conent-Type": "application/json"
				},
				body: JSON.stringify([])
			}
			)
			if (response.ok) {
				console.log("Usuario creado exitosamente")
				cargarTareas();
			}
		} catch (error) {

		}
	}
	const eliminarTodo = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/todo/users/KineJuanPintos", {
				method: "DELETE",
			});
			await response.text ()
				setListaTareas([]);
				await crearUsuario();
		} catch (error) {
			console.error("Error al eliminar todo", error);
		};
		//hasta aca la funcion borrae todo

	}

	return (
		<div>
			<Header />
			<Formulario listaTareas={listaTareas} setListaTareas={setListaTareas} />
			<ListadeTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
			<div className="borrar_todo">
				<button className="borrar_todo" onClick={() => {eliminarTodo()}}>Borrar todas las tareas</button>
			</div>
		</div>

	)
};

export default Home;
