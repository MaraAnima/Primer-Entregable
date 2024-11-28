import MovieNavbar from "./MovieNavbar";
import Foot from "./Foot";
import Paloma from "../../assets/img/Paloma.jpg";
import Lucas from "../../assets/img/Lucas.png";
import Sari from "../../assets/img/Sari.jpeg";
import Nat from "../../assets/img/Nat.png";
import Mara from "../../assets/img/Mara.png";
import Team from "../../assets/img/Team.jpeg";
function AboutUs() {
  return (
    <>
      <MovieNavbar />
      <div className="defaultBox ">
        <div className="titulo">
          <h1>Our Team</h1>

          <div className="card-position ">
            <div className="card-position-center">
              <div className="card">
                <img src={Team} alt="" className="fotos" />
                <h3>The team together</h3>
              </div>
            </div>
            <div className="card">
              <img src={Mara} alt="" className="fotos" />
              <h3>Mara</h3>
            </div>
            <div className="card">
              <img src={Nat} alt="" className="fotos" />
              <h3>Natt</h3>
            </div>
            <div className="card">
              <img src={Sari} alt="" className="fotos" />
              <h3>Sari</h3>
            </div>
            <div className="card">
              <img src={Lucas} alt="" className="fotos" />
              <h3>Lucas</h3>
            </div>
          </div>
          <div className="defaultBox">
            <p>
              Nosotros somos Sara, Nat, Lucas y Mara, un grupo de estudiantes de
              desarrollo web. Nos gusta aprender a crear sitios y aplicaciones,
              compartir ideas y ayudarnos entre nosotros. Siempre estamos
              trabajando en nuevos proyectos y buscando mejorar nuestras
              habilidades cada día.
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default AboutUs;
