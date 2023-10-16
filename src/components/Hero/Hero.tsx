import styles from "./Hero.module.css";

export default function Hero(){
    const pickBackgroundImage = () => {
        const minBackgroundNum = 1;
        const maxBackgroundNum = 10;
        const randomBackgroundNum = Math.floor(Math.random() * (maxBackgroundNum - minBackgroundNum) + minBackgroundNum);
        console.log(randomBackgroundNum);
        return `center / cover no-repeat url("./bg/bg-${randomBackgroundNum}.webp")`;
    }

    return (
        <div className={styles.hero} style={{background: pickBackgroundImage()}}>
            <div className={styles.hero_blur}></div>
        </div>
    )
}