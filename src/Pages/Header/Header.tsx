import './Header.css'
import '../Login/Login'
const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">The Journey</div>
                <ul className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/login">Login</a>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>

                </ul>
            </nav>
            <div className="home">

            </div>
        </>
    )
}

export default Header