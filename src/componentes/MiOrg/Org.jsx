import "./Org.css";
import { useState } from "react";
export const MiOrg = (props) => {
  const [mostrar, actualizarMostrar] = useState(true);
  const ManejarClick = () => {
    actualizarMostrar(!mostrar);
  };
  return (
    <section className="orgSection">
      <h3 className="title">Mi organizacion</h3>
      <img src="/img/mas.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};
