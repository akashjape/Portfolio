import { useState, useEffect } from "react";

export default function AboutMe() {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    setAboutText(
      "I am a passionate developer with a keen interest in building scalable and efficient web applications."
    );
  }, []);

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">{aboutText}</p>
        </div>
      </div>
    </section>
  );
}
