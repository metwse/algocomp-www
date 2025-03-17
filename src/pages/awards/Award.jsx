import styles from './Awards.module.scss';


export default function Award({ prize, place }) {
    return (
        <div className={styles['award']}>
            <div>
                <img src='/svg/wheat.svg' />
                    <span>{place}</span>
                <img src='/svg/wheat.svg' />
            </div>
            <span>{prize}</span>
        </div>
    )
}
