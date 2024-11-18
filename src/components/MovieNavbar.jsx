import logoHack1 from "../assets/img/logoHack1.png";

function MovieNavbar() {
  return (
    <>
      <div>
        <header>
          <img src={logoHack1} className="logo" alt="" />
          <div className="container">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
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
