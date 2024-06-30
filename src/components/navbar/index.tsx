import "./index.scss";
import { items } from "./utils";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="items-list">
        {items.map((item) => (
          <Link
            smooth
            spy
            to={`${item.url}`}
            offset={-50}
            key={item.url}
            activeClass="active"
            className="item"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
