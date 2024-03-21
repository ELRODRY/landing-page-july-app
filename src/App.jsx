import "./App.css";
import precentacionImg from "./assets/presentacion.jpg";
import tarotImg from "./assets/tarot.jpg";

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
      </div>
      <footer>alalaalaalalaalalaalalaalala</footer>
    </>
  );
}

export default App;
