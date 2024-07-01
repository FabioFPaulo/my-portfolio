import { CardAcademicProps } from "./types";
import "./index.scss";
export default function CardAcademicComponent(props: CardAcademicProps) {
  return (
    <a
      data-testid="card-academic-container"
      href={props.href}
      target="_blank"
      className="card-academic-container"
      role="link"
    >
      <img src={props.src} data-testid="card-academic-img" />
      <div className="card-academic-title" data-testid="card-academic-title">
        {props.title}
      </div>
      <div className="card-academic-date" data-testid="card-academic-date">
        {props.dateString}
      </div>
    </a>
  );
}
