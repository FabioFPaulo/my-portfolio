import { ContainerSectionProps } from "./types";
import "./index.scss";

export default function ContainerSectionComponent(
  props: ContainerSectionProps
) {
  return (
    <div
      className={`container-section-container-${props.colorScheme}`}
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
