import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AboutPageCompany from "../components/AboutPageCompany"
import AboutPageLegacy from "../components/AboutPageLegacy"

const AboutPage = () => {
  return (
    <>
        <Navbar />
        <AboutPageCompany />
        <AboutPageLegacy />
        <Footer />
    </>
  )
}

export default AboutPage