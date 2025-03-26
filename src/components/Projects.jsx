import { useState, useEffect } from "react";
import data from "./data/index.json";

export default function MyPortfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data?.portfolio) {
      setProjects(data.portfolio);
    }
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            href="https://github.com/akashjape"
            target="_blank"
            className="githubLink"
          >
            <button className="btn btn-github">Visit My GitHub</button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {projects.map((item, index) => {
          const techArray = item.technology;

          return (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>

                <p className="text-md">
                  {techArray.map((tech, techIndex) => (
                    <span key={techIndex} className="badge badge-primary">
                      {tech}
                    </span>
                  ))}
                </p>
                <a
                  href={item.link}
                  className="portfolio--link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
