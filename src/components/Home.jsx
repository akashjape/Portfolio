import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      <div className="app-container">
        <Hero />
        <Projects />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
