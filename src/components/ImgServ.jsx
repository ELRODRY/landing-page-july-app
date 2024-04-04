import "./ImgServ.css";

const ImgServ = ({ imagen, textoAlt }) => {
  return <img className="imgServ" src={imagen} alt={textoAlt} />;
};

export default ImgServ;
