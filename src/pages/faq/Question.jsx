import { useRef } from 'react';

import styles from './Question.module.scss'


export default function Question({ question, description }) {
    const ref = useRef(null);

    const onClick = () => {
        ref.current.toggleAttribute('a-enabled');
    };

    return (
        <div className={`${styles['question']} bd`} ref={ref}>
            <div className={styles['header']} onClick={onClick}>
                <h3>{question}</h3>
                <i className="bi bi-plus"></i>
            </div>
            <p className={styles['description']}>
                {description}
            </p>
        </div>
    );
}
