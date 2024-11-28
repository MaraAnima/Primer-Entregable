import MovieNavbar from "./MovieNavbar";
import Foot from "./Foot";
function Contact() {
  return (
    <>
      <MovieNavbar />
      <div className="defaultBox ">
        <h1>Contact</h1>

        <ul>
          <li>
            <a
              className="contactus"
              href="https://uy.linkedin.com/in/mara-silva-9324ab205"
            >
              Mara Silva
            </a>
          </li>
          <li>
            <a
              className="contactus"
              href="https://uy.linkedin.com/in/sara-olivera-805402219?trk=people-guest_people_search-card"
            >
              Sara Olivera
            </a>
          </li>
          <li>
            <a href="https://uy.linkedin.com/in/lucas-sanmartino-65812122a/en?trk=people-guest_people_search-card">
              Lucas Sanmartino
            </a>
          </li>
          <li>
            <a href="https://uy.linkedin.com/in/natayha-raicoff ">
              Natayha Raicoff
            </a>
          </li>
        </ul>
      </div>
      <Foot />
    </>
  );
}

export default Contact;
