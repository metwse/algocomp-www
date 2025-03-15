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
                    <Question 
                        question="NULL"
                        description="NULL"
                    />
                    <Question 
                        question="NULL"
                        description="NULL"
                    />
                    <Question 
                        question="NULL"
                        description="NULL"
                    />
                    <Question 
                        question="NULL"
                        description="NULL"
                    />
                    <Question 
                        question="NULL"
                        description="NULL"
                    />
                </div>
            </div>
            <Glow className={styles['glow1']} />
            <Glow className={styles['glow2']} />
            <Footer />
        </section>
    );
};
