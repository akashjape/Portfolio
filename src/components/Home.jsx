import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const Home = ({ theme }) => {
  return (
    <>
      <div className={`app-containern ${theme}`}>
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
