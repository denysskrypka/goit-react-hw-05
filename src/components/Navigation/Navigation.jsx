import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.container}>
      <ul className={css.nav}>
        <li>
          <NavLink className={linkClass} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClass} to={"movies"}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
