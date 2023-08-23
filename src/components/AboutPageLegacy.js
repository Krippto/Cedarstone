// import partner from "../Images/partnership.jpg"
import "./AboutPageLegacy.css"

const AboutPageLegacy = () => {
  return (
    <>
      <header><h1 className="legacy-header">Our Legacy and Impact</h1></header>
      <div className="legacy-container">
        <div>
          <h2>Two Decades of Excellence</h2>
          <p className="legacy-content">At Cedarstone, we pride ourselves on our rich history and the legacy we’ve
            built over 20 years. Our expertise has been instrumental in reshaping
            logistics and management practices, making a significant impact on
            businesses and industries. From the bustling markets of the African continent
            to the dynamic economies of the UK and India, our footprint is evident in the
            countless success stories we’ve been a part of.
          </p>
        </div>
        <div>
          <h2>Why choose us</h2>
          <p className="legacy-content">Our unwavering commitment to innovation, customer-centric solutions, and
            excellence has positioned us at the forefront of logistics consultancy. As we
            look to the future, we remain dedicated to furthering our mission and
            expanding our global influence.
          </p>
        </div>
      </div>
      {/* <div>
        <img className="legacy-image" src={partner} alt="partnership" width="30%" height="20%" loading="lazy" />
      </div> */}
    </>
  )
}

export default AboutPageLegacy