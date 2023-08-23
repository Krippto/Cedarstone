import team from "../Images/team.jpg"
import "./AboutPageCompany.css"

const AboutPageCompany = () => {
    return (
        <>
            <h1 className="company-header">Driving Logistics Transformation</h1>
            <div className="company-container">
                <div className="inner-company-container">
                    <header><h2>Who are we</h2></header>
                    <article className="text">Cedarstone Ltd. was born from a vision to revolutionize logistics practices.
                        Over two decades, we have not only transformed logistics in the region but
                        have expanded our horizons, offering unparalleled services in the African
                        continent, UK, and India.
                    </article>
                    <p className="text">Our journey of over 20 years in logistics and management speaks volumes
                        about our dedication and expertise. Our commitment is mirrored in the
                        tailored solutions we provide, making us a leading logistics consultancy. Our
                        strategic alliance with S CUBE International and esteemed collaborations
                        worldwide is a testament to our global standards and excellence.
                    </p>
                </div>
                <img className="about-image-section" src={team} alt="A team of dedicated professionals" loading="lazy" width="30%" height="100%" />
            </div>
        </>
    )
}

export default AboutPageCompany