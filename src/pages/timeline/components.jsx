import styles from './Timeline.module.scss'


export function Header({ children }) {
    return (
        <>
            <h3 className={styles['header']}>{children}</h3>
            <div>{/* intentionally left blank to align the parent grid */}</div>
        </>
    )
}

export function ListItem({ children, time }) {
    return (
        <>
            <div className={styles['list-symbol']}></div>
            <div className={styles['list-item']}>
                <h4>{time}</h4>
                <p>{children}</p>
            </div>
        </>
    )
}
