import Image from "next/image"
import styles from './card.module.css'

import locationIcon from '../public/location_icon.png'

const locationPlaceholder = 'Google Maps'

export default function card({ travelImage, locationCountry, locationGoogleMap, locationName, tripTimeline, travelLog }) {
    return (
        <section className={styles.cardContainer}>
            <div id={styles.imageDiv}>
                <Image id={styles.travelImage} src={travelImage} alt='Travel Location Image' />
            </div>
            <div id={styles.infoDiv}>
                <section id={styles.locationSection}>
                    <Image id={styles.locationIcon} src={locationIcon} />
                    <p id={styles.locationCountry}>{locationCountry}</p>
                    <a id={styles.googleMaps} href={locationGoogleMap}>{locationPlaceholder}</a>
                </section>
                <section id={styles.locationNameSection}>
                    <p id={styles.locationName}>{locationName}</p>
                </section>
                <section id={styles.tripTimelineSection}>
                    <p id={styles.tripTimeline}>{tripTimeline}</p>
                </section>
                <section id={styles.travelLogSection}>
                    <p id={styles.travelLog}>{travelLog}</p>
                </section>
            </div>
        </section>
    )
}