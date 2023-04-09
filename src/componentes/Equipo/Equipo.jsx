import { Colaborador } from "../Colaborador/Colaborador";
import "./Equipo.css";
export const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo,id } = props.datos;
  const { colaboradores,eliminarColaborador,actualizarColor,like } = props;
  const background1 = { borderColor: colorPrimario };
  const background2 = { backgroundColor: colorSecundario };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={background2}>
          <input type="color" className="color" value={colorPrimario} onChange={(e)=>actualizarColor(e.target.value,id)} />
          <h3 style={background1 }>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
