import "./index.scss";
import { componentData } from "./utils";
export default function Banner() {
  return (
    <div className="banner" id="home">
      <img src="/images/bg.jpg" alt="background" className="bg-image" />
      <div className="main-content">
        <div className="left-side">
          <div className="content">
            <div className="titles">
              <div className="subtitle">{componentData.subtitle}</div>
              <div className="title">{componentData.title}</div>
            </div>
            <div className="divider"></div>
            <div className="fields">
              {componentData.fields.map((field, index) => (
                <div className="field" key={index}>
                  <div className="label">{field.label}</div>
                  <div className="value">{field.value}</div>
                </div>
              ))}
            </div>
            <button>download cv</button>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img alt="Fábio Paulo" src={"/images/person_lg.png"}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
