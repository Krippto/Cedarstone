import introPic from "../Images/intro.jpg"
import "./HomePageHero.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const HomePageHero = () => {
    return (
        <div className="home-hero-container">
            <article className="home-desc-container">
                <header className="home-header">Unlocking Logistics Excellence</header>
                <p className="home-desc"> At Cedarstone, we bring innovation and efficiency to logistics
                    consultancy, serving businesses across Mauritius, Indian Ocean, and East
                    Africa. Our strategic partnerships and key collaborations empowers us to
                    deliver exceptional solutions to MMEs and SMEs.
                </p>
                <div className="home-buttons">
                    <button className="btn btn-primary">Explore our services</button>
                    <button className="btn btn-dark">Book a call <PhoneInTalkIcon fontSize="small" /></button>
                </div>
            </article>
            <img src={introPic} alt="A logistics professional" loading="lazy" width="30%" height="20%" />
        </div>
    )
}

export default HomePageHero