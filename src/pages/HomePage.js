import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomePageHero from "../components/HomePageHero"
import HomePageService from "../components/HomePageService"
import HomePageTestimonials from "../components/HomePageTestimonials"
import HomePageCTA from "../components/HomePageCTA"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HomePageHero />
            <HomePageService />
            <HomePageTestimonials />
            <HomePageCTA />
            <Footer />
        </>
    )
}

export default HomePage