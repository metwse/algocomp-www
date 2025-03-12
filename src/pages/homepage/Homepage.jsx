import styles from './Homepage.module.scss'


export default function Homepage() {
    return (
        <section className={styles['homepage']} id="homepage">
            <div>
                {/* intentionally left blank to center following div */}
            </div>

            <div className={styles['center']}>
                <img src="/svg/logo-full.svg" />
                <span>Kayıtlar ...'a kadar açık!</span>
                <div className={styles['buttons']}>
                    <button className="rounded-button">Detaylı Bilgi</button>
                    <button className="rounded-acm-button">Kayıt</button>
                </div>
            </div>
            
            <div className={styles['sponsors']}>
                <span>Sponsorlar</span>
                <div>
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                    <img src="/svg/logo-full.svg" />
                </div>
            </div>
        </section>
    );
};
