import styles from "./Footer.module.scss"


export default function Footer() {
    return (
        <footer>
            <img src="/img/svg/logo-full.svg" />
            <div className={styles['links']}>
                <a href="https://github.com/ituacm" target="_blank">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.instagram.com/ituacmsc/" target="_blank">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="mailto:algocomp@itu.acm.org" target="_blank">
                    <i class="bi bi-envelope-at-fill"></i>
                </a>
                <a href="https://twitter.com/ituacmsc" target="_blank">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.linkedin.com/company/ituacmsc/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <div className={styles['footer']}>
                <span>
                    Copyright © 2025 ITU ACM
                </span>
                <div>
                    <a className={styles['source']} href="https://github.com/ituacm/algocomp-www" target="_blank">
                        Kaynak Kodları
                    </a>
                    <a href="/kvkk.html">
                        KVKK
                    </a>
                    <a className={styles['mit-license']} href="https://opensource.org/license/mit" target="_blank">
                        The MIT License
                    </a>
                </div>
            </div>
        </footer>
    );
}
