import "./ButtonTurno.css";

const ButtonTurno = ({ linkMensaje }) => {
  const url = `https://wa.link/${linkMensaje}`;

  return (
    <div className="botonTurno">
      <a className="anchorBoton" href={url} target="_blank">
        Solicitar Turno
      </a>
    </div>
  );
};

export default ButtonTurno;
