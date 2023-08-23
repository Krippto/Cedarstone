import "./HomePageService.css"

const HomePageService = () => {
    return (
        <>
            <header className="home-page-header"><h1>Looking to optimize your supply chain and streamline logistics?</h1></header>
            <h3 className="home-page-service-text">Discover our comprehensive range of services designed to
                elevate your business and drive growth. Let us be your trusted logistics
                partner, guiding you towards success
            </h3>
            <div className="home-page-service-container">
                <div>
                    <h4 className="home-page-service-head">Process Optimization</h4>
                    <p className="home-page-service-desc">Streamlining logistics processes for enhanced efficiency</p>
                </div>
                <div>
                    <h4 className="home-page-service-head">Technology Integration</h4>
                    <p className="home-page-service-desc">Cutting-edge solutions for optimized logistics operations</p>
                </div>
                <div>
                    <h4 className="home-page-service-head">Training and Skill Development</h4>
                    <p className="home-page-service-desc">Customized programs to empower your workforce</p>
                </div>
                <div>
                    <h4 className="home-page-service-head">Warehouse Design and Layout</h4>
                    <p className="home-page-service-desc"> Maximize space and improve operational flow</p>
                </div>
                <div>
                    <h4 className="home-page-service-head">Sustainability Initiatives</h4>
                    <p className="home-page-service-desc"> Green solutions for a reduced environmental impact</p>
                </div>
            </div>
        </>
    );
}

export default HomePageService