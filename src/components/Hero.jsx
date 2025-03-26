import CV from "../assets/akash-jape-resume.pdf";
import { MdAddIcCall } from "react-icons/md";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [title, setTitle] = useState("Full Stack Developer");

  useEffect(() => {
    // Simulating a dynamic title change
    const timer = setInterval(() => {
      setTitle("React Developer");
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Akash</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{title}</span>
          </h1>
          <p className="hero--section-description">
            Passionate about building modern web applications with cutting-edge
            technologies.
          </p>
        </div>
        <div className="hero-button">
          <a href={CV} style={{ textDecoration: "none" }} download>
            <button className="btn btn-primary resume">Resume</button>
          </a>
          <a href="tel:7741001794">
            <button className="btn btn-primary resume">
              <MdAddIcCall />
            </button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
