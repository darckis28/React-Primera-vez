import { Boton } from "../CompoButtom/buttom";
import { ListaOpciones } from "../CompoSelect/CompoSelect";
import { CampoTexto } from "../CompoTExto/Campotexto";
import "./Formulario.css";
import { useState } from "react";
export const Formulario = (props) => {
  const [nombre,actualizarNombre]=useState("");
  const [puesto,actualizarPuesto]=useState("");
  const [img,actualizarImg]=useState("");
  const [equipo ,actualizarEquipo]=useState("");
  const[titulo,actualizarTitulo]=useState("");
  const[color,actualizarColor]=useState("")

const{registrarColaborador,crearEquipo}=props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar ={
      nombre,
      puesto,
      img,
      equipo
    }
  registrarColaborador(datosEnviar)
    
  };
  const manejarEnvioEquipo=(e)=>{
    e.preventDefault();
    crearEquipo({titulo,colorPrimario: color,colorSecundario: color+"80"})
  }
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="introduce Nombre" required
        valor={nombre}
        actualizarValor={actualizarNombre}/>
        <CampoTexto
          titulo="Puesto"
          placeholder="introduce el puesto de trabajo"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Imagen"
          placeholder="introduce el url de la imagen"
          required
          valor={img}
          actualizarValor={actualizarImg}
        />
        <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo}
        equipo={props.equipo} />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarEnvioEquipo}>
        <h2>Rellena el formulario para crear el Equipo</h2>
        <CampoTexto titulo="Titulo" placeholder="introduce Titulo" required
        valor={titulo}
        actualizarValor={actualizarTitulo}/>
        <CampoTexto
          className="campo-color"
          titulo="Color"
          placeholder="introduce el color en hexa"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};
