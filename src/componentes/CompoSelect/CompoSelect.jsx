import "./CompoSelect.css";
export const ListaOpciones = (props) => {
  const manejarCambio =(e)=>{
    props.actualizarValor(e.target.value)
  }
  return (
    <div className="compo-select">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipo.map((equipo,index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};
