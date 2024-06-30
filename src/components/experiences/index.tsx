import Cards from "../cards";
import "./index.scss";
import { experiencesData, formatStartEndDate } from "./utils";

export default function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <div className="experiences-content">
        <div className="title">Experiences</div>
        <div className="subtitle">
          Discover the experiences that have shaped my professional journey
        </div>
        <div className="list">
          {experiencesData.map((item, index) => (
            <Cards.Experience
              key={index}
              date={formatStartEndDate(item.start_at, item.end_at)}
              title={item.title}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
