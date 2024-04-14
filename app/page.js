import Header from "./header"
import Card from "./card"

import logoImage from "../public/global_icon.png"
import { travelEntries } from "./data"
import styles from './page.module.css'

const headingText = "my travel journal  ✈"


export default function page() {
    return (
        <div id={styles.mainContainer}>
            <Header logo={logoImage} headingText={headingText} />
            {travelEntries.map((entry) => (
                <Card 
                    {...entry}
                />
            ))}
        </div>
    )
}