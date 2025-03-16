import styles from './Format.module.scss'


export default function Format() {
    return (
        <section id="format" className={styles['format']}>
            <div>
                <h3>Yarışma Formatı</h3>
                <div>
                    algoComp’25 ön eleme ve final olmak üzere iki etaptan 
                    oluşmaktadır.<br />
                    22 Mart tarihinde düzenlenecek olan ön eleme aşamasında 
                    yarışmacıların 12 saatte 8-11 adet algoritma sorusuna çözüm
                    bulmaları gerekmektedir. En kısa sürede en çok puan 
                    toplayan 15 takım finalist olmaya hak kazanacaktır.<br />
                    24 Şubat 2024 tarihinde düzenlenecek olan final etabında
                    ise yarışmacıların ön eleme etabından daha zorlayıcı 8-11
                    algoritma sorusuna 6 saat içerisinde çözüm bulmaları 
                    gerekmektedir. En çok puan toplayan 5 takım büyük ödüllerin
                    sahibi olacaktır.
                </div>
            </div>
            <div>
                <h3>Katılım Kuralları</h3>
                <p>NULL</p>
            </div>
            <div>
                <h3>Puanlama ve Sıralama</h3>
                <p>NULL</p>
            </div>
        </section>
    );
}
