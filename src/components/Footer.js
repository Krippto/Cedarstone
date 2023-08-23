import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer pb-3">
            <div className="footer-firstline">
                <li class="nav-item"><Link to="/privacyPolicy" className="footer-firstline-items">Privacy Policy</Link></li>
                <li class="nav-item"><Link to="/termsOfUse" className="footer-firstline-items">Terms of Use</Link></li>
                <li class="nav-item"><Link to="/contact" className="footer-firstline-items">Contact Us</Link></li>
                <li class="nav-item"><Link className="footer-firstline-items">FAQs</Link></li>
                <li class="nav-item"><Link className="footer-firstline-items">Careers</Link></li>
            </div>
            <p className="footer-secondline">© 2023 Cedarstone, Inc</p>
            <div>
                <TwitterIcon color='primary'></TwitterIcon>
                <InstagramIcon color="secondary"></InstagramIcon>
                <LinkedInIcon color='primary'></LinkedInIcon>
                <FacebookIcon color="primary"></FacebookIcon>
            </div>
        </footer>
    )
}

export default Footer