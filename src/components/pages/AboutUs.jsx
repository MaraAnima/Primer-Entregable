import MovieNavbar from "./MovieNavbar";
import Foot from "./Foot";
import Paloma from "../../assets/img/Paloma.jpg";

function AboutUs() {
  return (
    <>
      <MovieNavbar />
      <div className="defaultBox ">
        <div className="Info-container ">
          <div className="">
            <h1>Our team</h1>
          </div>
          <div className="card-position-center">
            <div className="card">
              <img src={Paloma} alt="" className="fotos" />
              <h3>The team together</h3>
            </div>
          </div>
          <div className="card-position ">
            <div className="card">
              <img src={Paloma} alt="" className="fotos" />
              <h3>Sara</h3>
            </div>
            <div className="card">
              <img src={Paloma} alt="" className="fotos" />
              <h3>Mara</h3>
            </div>
            <div className="card">
              <img src={Paloma} alt="" className="fotos" />
              <h3>Nat</h3>
            </div>
            <div className="card">
              <img src={Paloma} alt="" className="fotos" />
              <h3>Lucas</h3>
            </div>
          </div>
          <div className="defaultBox">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              beatae id, soluta iure expedita corrupti molestiae. Magni sequi
              sint beatae ratione corporis illum est debitis error iusto, ea
              esse laboriosam! Molestias quo totam commodi pariatur est aliquam
              nam, saepe quibusdam!
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}

export default AboutUs;
