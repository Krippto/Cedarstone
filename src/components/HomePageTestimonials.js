import "./HomePageTestimonials.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HomePageTestimonials = () => {
  return (
    <>
    <header className="home-page-testimonial"><h1>Our Clients' Success, Our Pride</h1></header>
    <section>
        <h3 className="home-page-testi-header">Discover how our logistics expertise has transformed businesses like yours.</h3>
        <div className="home-page-testi-container">
            <div className="home-page-testi">
                <p className="home-page-testi-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus ornare augue eget mattis. Nam sit amet condimentum risus."</p>
                <div className="home-page-testi-pic"><AccountCircleIcon fontSize="large" /></div>
                <p className="home-page-testi-human">Thomas, CEO of Profound</p>
            </div>
            <div className="home-page-testi">
                <p className="home-page-testi-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus ornare augue eget mattis. Nam sit amet condimentum risus."</p>
                <div className="home-page-testi-pic"><AccountCircleIcon fontSize="large" /></div>
                <p className="home-page-testi-human">Margert, Vice president of Namoni</p>
            </div>
            <div className="home-page-testi">
                <p className="home-page-testi-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus ornare augue eget mattis. Nam sit amet condimentum risus."</p>
                <div className="home-page-testi-pic"><AccountCircleIcon fontSize="large" /></div>
                <p className="home-page-testi-human">Sundar, Founder of Google</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomePageTestimonials