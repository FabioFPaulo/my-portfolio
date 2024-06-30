import "./index.scss";
import { aboutData } from "./utils";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="left-side">
          <div className="title">About</div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: aboutData.description }}
          ></div>
        </div>
        <div className="right-side">
          <div className="list">
            {aboutData.skills.map((skill, index) => (
              <div className="item" key={index}>
                <div className="value">{skill.percent}%</div>
                <div className="label">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
