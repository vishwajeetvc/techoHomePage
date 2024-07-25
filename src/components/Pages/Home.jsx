
import Hero from "../Hero";
import Services from "../Services";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import Certifications from "../Certifications";
import Comments from "../Comments";
import BlogSection from "../BlogSection";
import Ready from "../Ready";

export default function Home(){
  return <>
        <Hero />
        <Services />
        <ThirdSection />
        <FourthSection />
        <Certifications />
        <Comments/>
        <BlogSection/>
        <Ready/>
  </>;
}
