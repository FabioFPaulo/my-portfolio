import { TitlePrimaryProps } from "./types";
import "./index.scss";

export default function TitlePrimaryComponent(props: TitlePrimaryProps) {
  return (
    <>
      <div className="title-primary-title">{props.title}</div>
      {props.subtitle && (
        <div className="title-primary-subtitle">{props.subtitle}</div>
      )}
    </>
  );
}
