import styles from './Footer.module.scss'


export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <img src="/svg/logo-full.svg"/>
            <div>
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M275,66.56V255.1c0,.85-.96,1.28-1.6,.85l-50.09-34.77c-.32-.11-.43-.43-.43-.85v-85.28c0-.43-.53-.64-.85-.32l-71.46,60.93c-.32,.32-.96,.32-1.28,0l-71.46-60.93c-.32-.32-.85-.11-.85,.32v85.18c0,.32-.11,.53-.43,.85l-49.98,34.77c-.74,.53-1.6,0-1.6-.85V66.56c0-.32,.11-.53,.32-.85l24.99-21.59c.32-.32,.96-.32,1.28,0l97.62,83.05c.32,.32,.96,.32,1.28,0L248.1,44.23c.32-.32,.96-.32,1.28,0l24.99,21.59c.53,.11,.64,.43,.64,.74h0Z"></path>
                    <polygon fill="none" points="300 100 200 100 200 0 100 0 100 100 0 100 0 200 100 200 100 300 200 300 200 200 300 200"></polygon>
                </svg>
                <i className="bi bi-github"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-linkedin"></i>
            </div>
        </footer>
    )
}
