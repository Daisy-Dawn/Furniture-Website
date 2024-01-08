import AboutHero from "../AboutPage/AboutHero";
import MeetOurTeam from "../AboutPage/MeetOurTeam";
import OfferBanner from "../AboutPage/OfferBanner";
import OurShop from "../AboutPage/OurShop";
import Testimonial from "../AboutPage/Testimonial";
import Brands from "../LandingPage/Brands";

const About = () => {
  return (
    <div >
      <AboutHero />
      <OurShop />
      <OfferBanner />
      <MeetOurTeam />
      <Testimonial />
      <Brands />
    </div>
  )
}

export default About;