import { NavLink } from "react-router-dom";
import s from "../Styles/Nav.module.css";
function Nav() {
  return (
    <nav className={s.NavLinks}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.loginBtn}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
