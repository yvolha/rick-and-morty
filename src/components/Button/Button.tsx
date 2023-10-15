import { IButtonProps } from "./Button.type";
import styles from "./Button.module.css";

export default function Button({type, value}: IButtonProps) {
    return <button type={type} value={value && value} className={styles.app_button}></button>
}