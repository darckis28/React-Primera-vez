import head from "/img/header.png";
import "./header.css";

export function Header() {
  return (
    <header className="cabecera">
      <img  className="imagen" src={head} alt="cosa1" />
    </header>
  );
}
