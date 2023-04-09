import "./CampoTexto.css";
export const CampoTexto = (props) => {
  const placeHolderModificado = `${props.placeholder}...`;
  const {type="text"}=props;
  const manejarCambio =(e)=>{
    props.actualizarValor(e.target.value)
    
  }
  return (
    <div className={`campo campo-${type}`} >
      <label>{props.titulo}</label>
      <input
        type={type}
        placeholder={placeHolderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};
