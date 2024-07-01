import { ContainersSectionProps } from "./types";
import "./index.scss";

export default function ContainersSectionComponent(
  props: ContainersSectionProps
) {
  return (
    <div
      className="container-section-container"
      id={props.id}
      data-testid={props.id}
    >
      <div
        className="container-section-content"
        data-testid={`${props.id}-content`}
      >
        {props.children}
      </div>
    </div>
  );
}
