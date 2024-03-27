import "./App.css";
import precentacionImg from "./assets/presentacion.jpg";
import tarotImg from "./assets/tarot.jpg";
import tresPreguntasImg from "./assets/3preguntas.png";
import amorVinculosImg from "./assets/lecturaAmorVinculos.png";
import lecturaGeneralImg from "./assets/lecturaGeneral.png";
import ButtonTurno from "./components/ButtonTurno.jsx";
import tarotAstroImg from "./assets/tarotAstrologia.png";
import ImgServ from "./components/ImgServ.jsx";
import EstructuraServ from "./components/EstructuraServ.jsx";
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
        <EstructuraServ
          imagen={tresPreguntasImg}
          textoAlt="Tres Preguntas"
          linkMensaje="mdpnf3"
          parrafo="¿Qué hago? ¿Qué piensa esa persona? ¿Le importo?  ¿debería continuar con ella?
          Cuando las emociones se vuelven caóticas y nuestras cabeza es un caos el tarot puede aporta 
          claridad desde una mirada objetiva, la cual te lleva a tener una comprensión más profunda
           de la relación, el tarot puede capacitarte para tomar decisiones más conscientes , ya sea 
           para seguir adelante, trabajar en aspectos de la  relación o tomar otro camino.
           Cantidad de preguntas a gusto. 
           Tiempo 30min"
          escritaArg="En Argentina $5200"
          escritaUsd="En El Exterior Pay Pal 7 Usd"
        />

        <EstructuraServ
          imagen={amorVinculosImg}
          textoAlt="Amor y Vinculos"
          linkMensaje="n9k5jl"
          parrafo="¿Qué hago? ¿Qué piensa esa persona? ¿Le importo?  ¿debería continuar con ella?
          Cuando las emociones se vuelven caóticas y nuestras cabeza es un caos el tarot puede aporta 
          claridad desde una mirada objetiva, la cual te lleva a tener una comprensión más profunda
           de la relación, el tarot puede capacitarte para tomar decisiones más conscientes , ya sea 
           para seguir adelante, trabajar en aspectos de la  relación o tomar otro camino.
           Cantidad de preguntas a gusto. 
           Tiempo 30min"
          videoLLamadaArg="En Argentina $10000"
          videoLLamadaUsd="En El Exterior Pay Pal 17 Usd"
          escritaArg="En Argentina $8000"
          escritaUsd="En El Exterior Pay Pal 12 Usd"
        />
        <EstructuraServ
          imagen={lecturaGeneralImg}
          textoAlt="Lectura General"
          linkMensaje="noo79b"
          parrafo="La lectura de tarot general puede abarcar diferentes temas como amor,salud, trabajo, o cualquier otra inquietud que tengas.
          Beneficios de conocer el panorama general de tu realidad actual pueden ser  Claridad mental, lo que genera alivio de estrés, más que nada si nos encontramos ante una toma de elección que consideramos importante.
          Como esta lectura nos permite ver cómo las diferentes áreas de tu vida se relacionan es sumamente útil para encontrar el origen de problemáticas.
          Si tu situación es caótica te animo a elegir esta opción. 
          Cantidad de preguntas a gusto. 
          Tiempo 50min"
          videoLLamadaArg="En Argentina $12200"
          videoLLamadaUsd="En El Exterior Pay Pal 33 Usd"
          escritaArg="En Argentina $9000"
          escritaUsd="En El Exterior Pay Pal 27 Usd"
        />
        <EstructuraServ
          imagen={tarotAstroImg}
          textoAlt="Tarot y Astrologia"
          linkMensaje="3tvr6y"
          parrafo="Este formato es uno de los más recomendados en Año Nuevo, o en las fechas de cumpleaños. Desde la astrología tenemos información sumamente relevante de ti, desde cómo es tu personalidad, mecanismos o patrones de comportamiento entre otros. 
          En cada cumpleaños tenemos algo que se llama revolución solar, la cual nos habla de cuál va a ser el mood energético de nuestro año. No solo se limita a predecir acontecimientos, sino que da información sobre el desarrollo personal y espiritual.
          Si para ti el desarrollo del ser es importante y quieres saber qué aspectos seran importantes en este nuevo año de vida la revolución solar es tu mejor opción. 
          Mientras que si tu necesidad de información es para tomar decisiones que tendran posibles efectos a largo plazo( más de 1 año) la carta natal es tu mejor opción."
          videoLLamadaArg="En Argentina $19000"
          videoLLamadaUsd="En El Exterior Pay Pal 35 Usd"
          escritaArg="En Argentina $15500"
          escritaUsd="En El Exterior Pay Pal 27 Usd"
        />
      </div>

      <footer>alalaalaalalaalalaalalaalala</footer>
    </>
  );
}

export default App;
