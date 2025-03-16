import Footer from '../../components/footer/Footer';
import Question from './Question';
import Glow from '../../components/glow/Glow';

import styles from './Faq.module.scss'


export default function Faq() {
    return (
        <section id="faq" className={styles['faq']}>
            <div>
                <h2>Sıkça Sorulan Sorular</h2>
                <div className={styles['questions']}>
                    <Question title="NULL">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Suspendisse varius enim in eros elementum 
                        tristique. Duis cursus, mi quis viverra ornare, eros
                        dolor interdum nulla, ut commodo diam libero vitae 
                        erat. Aenean faucibus nibh et justo cursus id rutrum.
                    </Question>
                    <Question title="NULL">
                        NULL
                    </Question>
                    <Question title="NULL">
                        NULL
                    </Question>
                    <Question title="NULL">
                        NULL
                    </Question>
                    <Question title="NULL">
                        NULL
                    </Question>
                </div>
            </div>
            <Glow className={styles['glow1']} />
            <Glow className={styles['glow2']} />
            <Footer />
        </section>
    );
};
