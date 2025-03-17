import Award from './Award.jsx'
import styles from './Awards.module.scss'


export default function awards() {
    return (
        <section id="awards" className={styles['awards']}>
            <h2>Ödüller</h2>
            <div className={styles['award-list']}>
                <Award prize="2.500₺" place="4" />
                <Award prize="15.000₺" place="2" />
                <Award prize="20.000₺" place="1" />
                <Award prize="10.000₺" place="3" />
                <Award prize="2.500₺" place="5" />
            </div>
        </section>
    );
}
