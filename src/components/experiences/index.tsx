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
            <div className="item" key={index}>
              <div className="date">
                {formatStartEndDate(item.start_at, item.end_at)}
              </div>
              <div className="content">
                <div className="item-title">{item.title}</div>
                <div
                  className="item-description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className="item-company">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
