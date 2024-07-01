import { CardAcademicProps } from "./types";
import "./index.scss";
export default function CardAcademicComponent(props: CardAcademicProps) {
  return (
    <a href={props.href} target="_blank" className="card-academic-container">
      <img src={props.src} />
      <div className="card-academic-title">{props.title}</div>
      <div className="card-academic-date">{props.dateString}</div>
    </a>
  );
}
