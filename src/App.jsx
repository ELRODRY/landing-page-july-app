import "./App.css";
import precentacionImg from "./assets/presentacion.jpg";
import tarotImg from "./assets/tarot.jpg";
import tresPreguntasImg from "./assets/3preguntas.png";
import amorVinculosImg from "./assets/lecturaAmorVinculos.png";
import lecturaGeneralImg from "./assets/lecturaGeneral.png";
import ButtonTurno from "./components/ButtonTurno.jsx"


function App() {
  return (
    <>
      <header>
        <p>plplpl</p>
      </header>
      <div className="precentacion">
        <h1>Tarot Online y Ejercicios de Manifestación </h1>
        <img
          className="precentacionImg"
          src={precentacionImg}
          alt="imagen tarot"
        />
        <p className="parrafoPresentacion">
          En un mundo lleno de incertidumbre y preguntas sin respuesta, a veces
          necesitamos una brújula para guiarnos en nuestro viaje por la vida.
          Hace años recorro el viaje de la vida acompañada del tarot la
          astrología y muchas mas herramientas que me han permitido crear magia
          y transformación en cada paso. Así como han sido mi varita mágica con
          el paso de los años lo han sido para ciento de personas y no es magia
          de esa que nos vende el cine, es guía, es luz es claridad, armonía a
          través de la antigua y poderosa práctica del tarot y de diversas
          técnicas te voy a acompañar, no como una maestra o una gurú que vende
          una imagen, te voy a acompañar como alguien que ha recorrido el camino
          en el que quizás hoy estas tu.
        </p>
        <div className="segundaPresentacion">
          <img
            className="segundaPresentacionImg"
            src={tarotImg}
            alt="imagen cartas de tarot"
          />
          <p className="parrafoSegundaPresentacion">
            El acceso a la información que nos da el tarot tiene múltiples
            beneficios que no se reducen a predecir el futuro, la información
            que recibimos nos lleva a explorar soluciones, empoderarnos para la
            toma de decisiones, identificar las emociones o los patrones
            mentales que nos mantienen siempre en la misma situación. Los
            beneficios de una lectura a veces no tienen palabras ya que pueden
            aportar luz en situaciones donde la subjetividad nos llena de ideas
            desdibujadas de la realidad.
          </p>
        </div>
        <div className="servTresPreguntas">
          <img
            className="imgServicioTresPreguntas"
            src={tresPreguntasImg}
            alt="Imagen servicio tres preguntas"
          />
          <div className="containerParrafoTresServ">
            <p className="parrafoTresServ">
              Este formato va orientado a responder dudas concretas. Las
              preguntas pueden ser todas del mismo tema o temas distintos.
              Consejos a la hora de elegir esta opción de lectura. Las lecturas
              son via whatsapp o telegram la vía que te sea mas cómoda. Para que
              las respuestas puedan ser lo más completas posibles es necesario
              el contexto de la pregunta, siéntete libre de poder enviar audios
              para poder explicar o hacer tu pregunta. Las respuestas jamás
              quedarán en un No o solo un Si siempre llevan un desarrollo, una
              explicación o un consejo según sea necesario.
            </p>
            <h3>Valor de lectura escrita </h3>
            <h4>En Argentina $5200</h4>
            <h4>En El Exterior Pay Pal Usd 7</h4>
            <ButtonTurno linkMensaje="mdpnf3" />
          </div>
        </div>
        <div className="servLecAmorVinculos">
          <img
            className="imgServicioAmorVinculos"
            src={amorVinculosImg}
            alt="lectura amor vinculos"
          />
          <div className="containerParrafoAmorVinculos">
            <p className="parrafoAmorVinculos">
              ¿Qué hago? ¿Qué piensa esa persona? ¿Le importo? ¿debería
              continuar con ella? Cuando las emociones se vuelven caóticas y
              nuestras cabeza es un caos el tarot puede aporta claridad desde
              una mirada objetiva, la cual te lleva a tener una comprensión más
              profunda de la relación, el tarot puede capacitarte para tomar
              decisiones más conscientes , ya sea para seguir adelante, trabajar
              en aspectos de la relación o tomar otro camino. Cantidad de
              preguntas. a gusto. Tiempo 30min
            </p>
            <div className="preciosAmorVinculos">
              <div className="amorVinculosVideoLLamada">
                <h3>Valor de lectura videollamada</h3>
                <h4>En Argentina $10000</h4>
                <h4>En El Exterior Pay Pal Usd 17Usd </h4>
              </div>
              <div className="amorVinculosEscritura">
                <h3>Valor de lectura escrita</h3>
                <h4>En Argentina $8000</h4>
                <h4>En El Exterior Pay Pal Usd 12Usd</h4>
              </div>
            </div>
            <ButtonTurno linkMensaje="n9k5jl" />
          </div>
        </div>
        <div className="servLecturaGeneral">
          <img src={lecturaGeneralImg} alt="Lectura General" />

        </div>

      </div >

      <footer>alalaalaalalaalalaalalaalala</footer>
    </>
  );
}

export default App;
