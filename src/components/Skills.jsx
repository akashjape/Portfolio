import data from "./data/index.json";
import { useState, useEffect } from "react";

export default function MySkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (data?.skills) {
      setSkills(data.skills);
    }
  }, []);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {skills.map((item, index) => {
          console.log(item.src);
          return (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
