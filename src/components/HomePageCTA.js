import "./HomePageCTA.css"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import partnership from "../Images/partnership.jpg"
import adani from "../Images/adani.jpg"
import glovo from "../Images/glovo.png"
import kobo from "../Images/kobo.jpg"
import ceva from "../Images/ceva.png"
import takealot from "../Images/takealot.png"
import zipline from "../Images/zipline.png"

const HomePageCTA = () => {
    return (
        <>
            <section className="home-page-cta-container">
                <img src={partnership} alt="A sign of partnering with Cedarstone" loading="lazy" width="30%" height="20%" className="home-page-cta-img" />
                <div className="home-page-cta-desc">
                    <p>Our clients say <span className="home-page-cta-highlighter">"Cedarstone is one of the most trusted and valuable"</span> for an enhanced logistics</p>
                    <p>Have a talk?</p>
                    <button className="btn btn-dark">Book a call <PhoneInTalkIcon fontSize="small" /></button>
                </div>
            </section>
            <h1>Our Top Clients</h1>
            <div className="home-page-cta-clients">
                <img src={adani} alt="Adani company logo" loading="lazy" width="30%" />
                <img src={glovo} alt="Glovo company logo" loading="lazy" width="30%" />
                <img src={kobo} alt="Kobo company logo" loading="lazy" width="30%" />
                <img src={ceva} alt="Tata company logo" loading="lazy" width="30%" />
                <img src={takealot} alt="Takealot company logo" loading="lazy" width="30%" />
                <img src={zipline} alt="Zipline company logo" loading="lazy" width="30%" />
            </div>
        </>
    )
}

export default HomePageCTA