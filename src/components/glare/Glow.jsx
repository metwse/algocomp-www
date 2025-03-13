import styles from './Glow.module.scss'


export default function Glow({ className }) {
    return (
        <div className={`${className} ${styles['glare']}`}> </div>
    );
}
