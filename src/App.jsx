import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ThirdSection from "./components/ThirdSection.jsx";
import FourthSection from "./components/FourthSection.jsx";
import Certifications from "./components/Certifications.jsx";
import Comments from "./components/Comments.jsx";
import Blogs from "./components/Blogs.jsx";
import Ready from "./components/Ready.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Services />
        <ThirdSection />
        <FourthSection />
        <Certifications />
        <Comments/>
        <Blogs/>
        <Ready/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </>
  );
}

export default App;
