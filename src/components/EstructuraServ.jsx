import "./EstructuraServ.css";
import ImgServ from "./ImgServ";
import ButtonTurno from "./ButtonTurno";

const EstructuraServ = ({
  tituloOpcion1,
  tituloOpcion2,
  videoLLamadaArg,
  videoLLamadaUsd,
  escritaArg,
  escritaUsd,
  imagen,
  textoAlt,
  linkMensaje,
  children,
}) => {
  return (
    <div className="containerSercicios">
      <ImgServ imagen={imagen} textoAlt={textoAlt} />
      <div className="containerParrafoGeneral">
        <p className="parrafoGeneral">{children}</p>
        <div className="containerPrecios">
          {videoLLamadaArg && videoLLamadaUsd && (
            <div className="opcion1">
              <h3>{tituloOpcion1}</h3>
              <h4>{videoLLamadaArg}</h4>
              <h4>{videoLLamadaUsd}</h4>
            </div>
          )}
          {escritaArg && escritaUsd && (
            <div className="opcion2">
              <h3>{tituloOpcion2}</h3>
              <h4>{escritaArg}</h4>
              <h4>{escritaUsd}</h4>
            </div>
          )}
        </div>
        <ButtonTurno linkMensaje={linkMensaje} />
      </div>
    </div>
  );
};

export default EstructuraServ;
