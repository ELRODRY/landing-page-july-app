import "./EstructuraServ.css";
import ImgServ from "./ImgServ";
import ButtonTurno from "./ButtonTurno";

const EstructuraServ = ({
    parrafo,
    videoLLamadaArg,
    videoLLamadaUsd,
    escritaArg,
    escritaUsd,
    imagen,
    textoAlt,
    linkMensaje
}) => {


    return (
        <div className="containerSercicios">
            <ImgServ imagen={imagen} textoAlt={textoAlt} />
            <div className="containerParrafoGeneral">
                <p className="parrafoGeneral">{parrafo}</p>
                <div className="containerPrecios">
                    {videoLLamadaArg && videoLLamadaUsd &&
                        <div className="opcion1">
                            <h3>Valor de lectura videollamada</h3>
                            <h4>{videoLLamadaArg}</h4>
                            <h4>{videoLLamadaUsd}</h4>
                        </div>}
                    {escritaArg && escritaUsd &&
                        <div className="opcion2">
                            <h3>Valor de lectura escrita</h3>
                            <h4>{escritaArg}</h4>
                            <h4>{escritaUsd}</h4>
                        </div>}
                </div>
                <ButtonTurno linkMensaje={linkMensaje} />
            </div>
        </div>
    );
};

export default EstructuraServ;
