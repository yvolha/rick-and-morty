import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

export default function Header () {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_wrapper}>
                    <Link to={"/"} className={styles.logo_wrapper}>
                        <div className={styles.logo}></div>
                    </Link>
                    <Nav />
                </div>
            </div>
        </header>
    );
}