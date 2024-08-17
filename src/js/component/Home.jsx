import React, {useEffect, useState} from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import ListadeTareas from "./ListadeTareas";




const Home = () => {
	const [listaTareas, setListaTareas] = useState([]);

	useEffect(() => {
		const cargarTareas = async () => {
			try {
				const response = await fetch("https://playground.4geeks.com/todo/users/KineJuanPintos")
				if (!response.ok){
					throw new Error("Datos no cargados");
				}
				const data = await response.json();
				setListaTareas(data.todos);
			} catch (error) {
				console.log("Error al cargar lista:", error);
				crearUsuario();
				
			}
		}

		const crearUsuario = async () => {
			try {
				const response = await fetch("https://playground.4geeks.com/todo/users/KineJuanPintos",{
					method: "POST",
					header: {
						"Conent-Type": "application/json"
					},
					body: JSON.stringify([])
				}
				)
				if(response.ok){
					console.log("Usuario creado exitosamente")
					cargarTareas(); 
				}
			} catch (error) {
				
			}
		}
		cargarTareas();
	},[]);
console.log(listaTareas)

	return (
		<div>
			<Header />
			<Formulario listaTareas={listaTareas} setListaTareas={setListaTareas} />
			<ListadeTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
		</div>
	)
};

export default Home;
