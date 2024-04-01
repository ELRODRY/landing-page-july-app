import "./App.css";
import precentacionImg from "./assets/presentacion.jpg";
import tarotImg from "./assets/tarot.jpg";
import tresPreguntasImg from "./assets/3preguntas.png";
import amorVinculosImg from "./assets/lecturaAmorVinculos.png";
import lecturaGeneralImg from "./assets/lecturaGeneral.png";
import manifestacioAcccionImg from "./assets/manifestacionAccion.png";
import whatsappLogo from "./assets/whatsapp.svg";
import tarotAstroImg from "./assets/tarotAstrologia.png";
import EstructuraServ from "./components/EstructuraServ.jsx";
import telegramIcon from "./assets/telegram.svg";
import youtubeIcon from "./assets/youtube.svg";
function App() {
  return (
    <>
      <header>
        <div className="containerRedesSocialesTurno">
          <div className="solicitarTurno">
            <a
              className="linkTurno"
              href="https://wa.link/xu56hn"
              target="_blank"
            >
              Solicitar Turno
            </a>
          </div>
          <div className="redesSociales">
            <a className="linkRedesSociales" href="#footerLinks">
              Redes Sociales
            </a>
          </div>
        </div>
      </header>
      <div className="precentacion">
        <h1 className="titulo">Tarot Cuántico</h1>
        <div className="containerImgPrecentacion">
          <img
            className="precentacionImg"
            src={precentacionImg}
            alt="imagen tarot"
          />
          <p className="parrafoPresentacion">
            En un mundo lleno de incertidumbre y preguntas sin respuesta, a
            veces necesitamos una brújula para guiarnos en nuestro viaje por la
            vida. Hace años recorro el viaje de la vida acompañada del tarot la
            astrología y muchas mas herramientas que me han permitido crear
            magia y transformación en cada paso. Así como han sido mi varita
            mágica con el paso de los años lo han sido para ciento de personas y
            no es magia de esa que nos vende el cine, es guía, es luz es
            claridad, armonía a través de la antigua y poderosa práctica del
            tarot y de diversas técnicas te voy a acompañar, no como una maestra
            o una gurú que vende una imagen, te voy a acompañar como alguien que
            ha recorrido el camino en el que quizás hoy estas tu.
          </p>
        </div>

        <div className="segundaPresentacion">
          {/* <div className="containerImgSegundaPresentacion"> */}
          <img
            className="segundaPresentacionImg"
            src={tarotImg}
            alt="imagen cartas de tarot"
          />
          {/* </div> */}
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
          tituloOpcion2="Valor de lectura escrita"
          imagen={tresPreguntasImg}
          textoAlt="Tres Preguntas"
          linkMensaje="mdpnf3"
          escritaArg="En Argentina $5200"
          escritaUsd="En El Exterior Pay Pal 7 Usd"
        >
          Este formato va orientado a responder dudas concretas. Las preguntas
          pueden ser todas del mismo tema o temas distintos. Consejos a la hora
          de elegir esta opción de lectura. Las lecturas son via whatsapp o
          telegram la vía que te sea mas cómoda. Para que las respuestas puedan
          ser lo más completas posibles es necesario el contexto de la pregunta,
          siéntete libre de poder enviar audios para poder explicar o hacer tu
          pregunta. Las respuestas jamás quedarán en un No o solo un Si siempre
          llevan un desarrollo, una explicación o un consejo según sea
          necesario.
        </EstructuraServ>

        <EstructuraServ
          tituloOpcion1="Valor de lectura videollamada"
          tituloOpcion2="Valor de lectura escrita"
          imagen={amorVinculosImg}
          textoAlt="Amor y Vinculos"
          linkMensaje="n9k5jl"
          videoLLamadaArg="En Argentina $10000"
          videoLLamadaUsd="En El Exterior Pay Pal 17 Usd"
          escritaArg="En Argentina $8000"
          escritaUsd="En El Exterior Pay Pal 12 Usd"
        >
          ¿Qué hago? ¿Qué piensa esa persona? ¿Le importo? ¿debería continuar
          con ella? Cuando las emociones se vuelven caóticas y nuestras cabeza
          es un caos el tarot puede aporta claridad desde una mirada objetiva,
          la cual te lleva a tener una comprensión más profunda de la relación,
          el tarot puede capacitarte para tomar decisiones más conscientes , ya
          sea para seguir adelante, trabajar en aspectos de la relación o tomar
          otro camino. Cantidad de preguntas a gusto. Tiempo 30min
        </EstructuraServ>
        <EstructuraServ
          tituloOpcion1="Valor de lectura videollamada"
          tituloOpcion2="Valor de lectura escrita"
          imagen={lecturaGeneralImg}
          textoAlt="Lectura General"
          linkMensaje="noo79b"
          videoLLamadaArg="En Argentina $12200"
          videoLLamadaUsd="En El Exterior Pay Pal 33 Usd"
          escritaArg="En Argentina $9000"
          escritaUsd="En El Exterior Pay Pal 27 Usd"
        >
          La lectura de tarot general puede abarcar diferentes temas como
          amor,salud, trabajo, o cualquier otra inquietud que tengas.Beneficios
          de conocer el panorama general de tu realidad actual pueden ser
          Claridad mental, lo que genera alivio de estrés, más que nada si nos
          encontramos ante una toma de elección que consideramos importante.
          Como esta lectura nos permite ver cómo las diferentes áreas de tu vida
          se relacionan es sumamente útil para encontrar el origen de
          problemáticas. Si tu situación es caótica te animo a elegir esta
          opción. Cantidad de preguntas a gusto. Tiempo 50min
        </EstructuraServ>

        <EstructuraServ
          tituloOpcion1="Valor de lectura videollamada"
          tituloOpcion2="Valor de lectura escrita"
          imagen={tarotAstroImg}
          textoAlt="Tarot y Astrologia"
          linkMensaje="3tvr6y"
          videoLLamadaArg="En Argentina $19000"
          videoLLamadaUsd="En El Exterior Pay Pal 35 Usd"
          escritaArg="En Argentina $15500"
          escritaUsd="En El Exterior Pay Pal 27 Usd"
        >
          Este formato es uno de los más recomendados en Año Nuevo, o en las
          fechas de cumpleaños. Desde la astrología tenemos información
          sumamente relevante de ti, desde cómo es tu personalidad, mecanismos o
          patrones de comportamiento entre otros. En cada cumpleaños tenemos
          algo que se llama revolución solar, la cual nos habla de cuál va a ser
          el mood energético de nuestro año. No solo se limita a predecir
          acontecimientos, sino que da información sobre el desarrollo personal
          y espiritual. Si para ti el desarrollo del ser es importante y quieres
          saber qué aspectos seran importantes en este nuevo año de vida la
          revolución solar es tu mejor opción. Mientras que si tu necesidad de
          información es para tomar decisiones que tendran posibles efectos a
          largo plazo( más de 1 año) la carta natal es tu mejor opción.
        </EstructuraServ>
        <EstructuraServ
          tituloOpcion1="Valor de videollamada por Zoom"
          tituloOpcion2="Valor de ejercicios Grabados"
          imagen={manifestacioAcccionImg}
          textoAlt="Manifestacion en accion"
          linkMensaje="wryq52"
          videoLLamadaArg="En Argentina $37000"
          videoLLamadaUsd="En El Exterior Pay Pal 53 Usd"
          escritaArg="En Argentina $25500"
          escritaUsd="En El Exterior Pay Pal 34 Usd"
        >
          Manifestación en acción personalizada. Entrenamiento de 3 ejercicios.
          Trabajaremos 1 vez por semana una sesion donde trabajaremos con tu
          deseo y las ideas limitantes que no te han permitido plasmar lo que
          quieres para tu vida. Ejercicios a la medida, acompañamiento semanal y
          asesoramiento siempre que lo necesites durante el periodo de 3
          semanas, cada sesión quedará grabada. Plataforma Zoom. <br />
          Manifestación en acción ejercicios grabados. Con esta opción recibirás
          3 audios con ejercicios creados en base a tu deseo, que sean grabados
          no quiere decir que sean genéricos, una vez que elijas esta opción
          recibirás un cuestionario el cual a mi me permite crear los ejercicios
          en base a tu situación.
        </EstructuraServ>
      </div>
      <div className="containerMensajeFinal">
        <p className="mensajeFinal">
          La toma de consciencia de lo que no vemos es el primer paso en el
          camino de la transformación. <br /> Yo voy a ser tu compañera en ese
          camino.
        </p>
      </div>
      <div className="botonWhatsapp">
        <a href="https://wa.link/xu56hn" target="_blank">
          <img
            className="whatsappImg"
            src={whatsappLogo}
            alt="Boton Whatsapp"
          />
        </a>
      </div>
      <footer id="footerLinks">
        <a
          className="linkYouTube"
          href="https://www.youtube.com/@10decopa"
          target="_blank"
        >
          <img className="youTubeImg" src={youtubeIcon} alt="Icono Youtube" />
          <p>YouTube</p>
        </a>

        <a
          className="linkTelegram"
          href="https://t.me/tarotcuantico1234"
          target="_blank"
        >
          <img
            className="telegramImg"
            src={telegramIcon}
            alt="Icono Telegram"
          />
          <p>Telegram</p>
        </a>
      </footer>
    </>
  );
}

export default App;
