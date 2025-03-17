import styles from './Awards.module.scss';


export default function Award({ prize, place, ref }) {
    return (
        <div className={`${styles['award']} ${styles['p' + place]}`} ref={ref}>
            <div>
                <img src="/img/svg/wheat.svg" />
                    <span>{place}</span>
                <img src="/img/svg/wheat.svg" />
            </div>
            <span>{prize}</span>
        </div>
    )
}
