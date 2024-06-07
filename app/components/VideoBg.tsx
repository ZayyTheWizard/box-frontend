import Styles from "./VideoBg.module.css"

export default function VideoBg() {
    return (
        <div className={Styles.vidMain}>
            <video autoPlay loop muted>
                <source src="./assets/StarVideo.mp4" type="video/mp4"/>
                Your browser does not support this video tag.
            </video>
        </div>
    )
}