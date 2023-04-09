import "./Colaborador.css";
import { AiFillCloseCircle,AiFillHeart,AiOutlineHeart } from "react-icons/ai";
export const Colaborador = (props) => {
  const { nombre, puesto, img, equipo,id,favorite } = props.datos;
  const { colorPrimario,colorSecundario, eliminarColaborador,like } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={()=>eliminarColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={img} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {favorite ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)}/>}
      </div>
    </div>
  );
};
