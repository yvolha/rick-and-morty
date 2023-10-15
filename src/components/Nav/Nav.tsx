import { NavLink } from "react-router-dom";

import "./Nav.css";

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active nav_item" : "nav_item")}>Home</NavLink>
            <NavLink to="/all" className={({ isActive }) => (isActive ? "active nav_item" : "nav_item")}>All Chars</NavLink>
            <NavLink to="/random" className={({ isActive }) => (isActive ? "active nav_item" : "nav_item")}>Random Char</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active nav_item" : "nav_item")}>About</NavLink>
        </nav>
    );
}
