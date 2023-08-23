import "./Navbar.css"
import { Link } from "react-router-dom"
import companyLogo from "../Images/Cedarstone_Logo_compressed.png"

const Navbar = () => {
    return (
        <nav className="outer-container">
            <div className="navbar-container">
                <div>
                    <Link to="/"><img src={companyLogo} alt="Credarstone company logo" height="25px" /></Link>
                </div>
                <div className="inner-nav">
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/features" className="nav-item">Features</Link></li>
                    <li><Link to="/blog" className="nav-item">Blog</Link></li>
                    <li><Link to="/contact" className="nav-item">Contact</Link></li>
                </div>
                <div>
                    <button className="button btn btn-primary">Get in Touch</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar