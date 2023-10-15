import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <div>
            <NavLink to="/" className={({ isActive }) => (isActive ? `active ${styles.nav_item}` : styles.nav_item)}>Home</NavLink>
            <NavLink to="/all" className={({ isActive }) => (isActive ? `active ${styles.nav_item}` : styles.nav_item)}>All Chars</NavLink>
            <NavLink to="/random" className={({ isActive }) => (isActive ? `active ${styles.nav_item}` : styles.nav_item)}>Random Char</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? `active ${styles.nav_item}` : styles.nav_item)}>About</NavLink>
        </div>
    );
}
