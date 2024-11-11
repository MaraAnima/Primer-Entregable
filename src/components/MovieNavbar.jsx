import './MovieNavbar.css';

function MovieNavbar() {
    return (
        <header className="header">
            <img src="https://cdn.podimo.com/images/6587a3c2-8e40-4f92-b3b4-1135e46fae1f_400x400.png" alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <a href="/">Home</a>
                </ul>
            </nav>
        </header>
    );
}
export default MovieNavbar;
