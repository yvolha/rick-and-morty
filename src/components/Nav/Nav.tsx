import { NavLink } from "react-router-dom";

import styling from "./Nav.module.css";
import Button from "../Button/Button";

export default function Nav() {
    return (
        <div className={styling.nav}>
            <Button type="button" />
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/all" className={({ isActive }) => (isActive ? "active" : "")}>All Chars</NavLink>
            <NavLink to="/random" className={({ isActive }) => (isActive ? "active" : "")}>Random Char</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </div>
    );
}
