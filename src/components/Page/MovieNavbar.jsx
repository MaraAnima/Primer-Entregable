import { Link } from "react-router-dom";

function MovieNavbar() {
  return (
    <>
      <div>
        <header>
          <Link to = "/">
          <img src="src/assets/img/logoHack1.png" className="logo" alt="" />
          </Link>
          <div className="container">
            <nav>
              <ul>
                <li><Link to = "/">Home</Link></li>
                <li>
                  <Link to = "/AboutUs">About us</Link>
                </li>
                <li>
                  <Link to = "/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
export default MovieNavbar;
