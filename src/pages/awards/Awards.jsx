import Award from './Award'
import { useEffect, useRef } from 'react';

import styles from './Awards.module.scss'


export default function Awards() {
    const fifth = useRef(null);
    const section  = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const f = fifth.current;
            const s = section.current;

            if (window.innerWidth > 720 && window.innerWidth <= 1000) {
                const minHeight = f.offsetHeight * 2.5 + f.offsetTop - s.offsetTop;

                s.style.minHeight = minHeight + 'px';
            } else 
                s.style.minHeight = 'unset';
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="awards" className={styles['awards']} ref={section}>
            <h2>Ödüller</h2>
            <div className={styles['award-list']}>
                <Award prize="4.000₺" place="4" />
                <Award prize="7.500₺" place="2" />
                <Award prize="15.000₺" place="1" />
                <Award prize="5.000₺" place="3" />
                <Award prize="3.000₺" place="5" ref={fifth} />
            </div>
            <Award prize="2.000₺" place="6" />
        </section>
    );
}
