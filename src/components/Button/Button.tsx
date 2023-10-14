import { IButtonProps } from "./Button.type";

export default function Button({type, value}: IButtonProps) {
    return <button type={type} value={value}></button>
}