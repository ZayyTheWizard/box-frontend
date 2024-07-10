import MyThree from "../DjVisualizer/Threejs";
import MyCard from '../Card/Card';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Styles from './cardAndVoice.module.css';


const Card = () => <MyCard />;
const Voice = () => <MyThree />;

export default function CardAndVoice({showAI, setShowAI, songData, voiceData}: any) {
    return (
        <main>
            <button className={Styles.button} onClick={() => setShowAI(!showAI)}></button>
            <TransitionGroup>
                <CSSTransition
                    key={showAI ? 'A' : 'B'}
                    timeout={500}
                    classNames={{
                        enter: Styles.enter,
                        enterActive: Styles.enterActive,
                        exit: Styles.exit,
                        exitActive: Styles.exitActive
                    }}
                    >
                        {showAI ? <Voice /> : <Card />}
                    </CSSTransition>
            </TransitionGroup>
        </main>
    );
}