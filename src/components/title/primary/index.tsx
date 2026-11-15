import type {TitlePrimaryProps} from "./types";
import "./index.css";

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
