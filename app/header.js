import Image from "next/image"
import styles from "./header.module.css"

export default function header({logo, headingText}) {
    return (
        <section className={styles.headerContainer}>
            <Image id={styles.logo} src={logo} />
            <p id={styles.heading}>{headingText}</p>
        </section>
    ) 
}