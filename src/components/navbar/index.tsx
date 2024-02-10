import "./index.scss";
import { items } from "./utils";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="items-list">
        {items.map((item) => (
          <a href={`#${item.url}`} key={item.url} className="item">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
