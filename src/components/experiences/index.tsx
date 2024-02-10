import "./index.scss";
import { experiencesData, formatStartEndDate } from "./utils";

export default function Experiences() {
  return (
    <div className="experiences">
      <div className="experiences-content">
        <div className="title">Experiences</div>
        <div className="subtitle">
          Discover the experiences that have shaped my professional journey
        </div>
        <div className="list">
          {experiencesData.map((item) => (
            <div className="item">
              <div className="date">
                {formatStartEndDate(item.start_at, item.end_at)}
              </div>
              <div className="content">
                <div className="item-title">{item.title}</div>
                <div className="item-description">{item.description}</div>
                <div className="item-company">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
