import { useState } from "react";
import { v4 as uuid } from "uuid";
import { MiOrg } from "./componentes/MiOrg/Org";
import { Formulario } from "./componentes/formulario/formulario";
import { Header } from "./componentes/header/header";
import { Equipo } from "./componentes/Equipo/Equipo";

export function App() {
  const [mostarForm, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "andi aguirre",
      puesto: "Jefe",
      img: "https://github.com/darckis28.png",
      equipo: "UX y Diseño",
      favorite:true
    },
    {
      id: uuid(),
      nombre: "Nill soer",
      puesto: "cafetero",
      img: "https://github.com/rock.png",
      equipo: "Frond End",
      favorite:false
    },
    {
      id: uuid(),
      nombre: "Pedro juaq",
      puesto: "cafetero",
      img: "https://github.com/Hulk.png",
      equipo: "Data Sciense",
      favorite:true
    },
    {
      id: uuid(),
      nombre: "Marcos Lopez",
      puesto: "cafetero",
      img: "https://github.com/tonyStark.png",
      equipo: "Movil",
      favorite:false
    },
    {
      id: uuid(),
      nombre: "anuel lopez",
      puesto: "cafetero",
      img: "https://github.com/Doria.png",
      equipo: "Programacion",
      favorite:true
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      id: uuid(),
      titulo: "Frond End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuid(),
      titulo: "Data Sciense",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarForm);
  };
  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };
  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    )
    actualizarColaboradores(nuevosColaboradores)
  };

  //actualizar color
  const actualizarColor = (color, id) => {
    console.log("actualizar...", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id == id) {
        equipo.colorPrimario = color;
        equipo.colorSecundario = color + "80";
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };
  //crear equipo
  const crearEquipo=(nuevoEquipo)=>{
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }
  const like =(id)=>{
    
    const colaboradoresLike = colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.favorite = !colaborador.favorite
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresLike)
  }
  return (
    <div>
      <Header />
      {/* {mostarForm ? <Formulario /> : <></>} */}
      {mostarForm && (
        <Formulario
          equipo={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          datos={equipo}
        />
      ))}
    </div>
  );
}
