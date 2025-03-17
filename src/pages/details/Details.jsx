import styles from "./Details.module.scss"


export default function Details() {
    return (
        <section id="details" className={styles['details']}>
            <div className={styles['background-tiles']}></div>
            <div className={styles['texts']}>
                <h2>
                    algoComp serüveni beşinci yılında hız kesmeden devam ediyor!
                </h2>
                <div className={styles['text']}>
                    Türkiye’nin dört bir yanından öğrencileri bir araya getiren
                    algoComp’25, ITU ACM Student Chapter tarafından düzenlenen
                    prestijli bir algoritma yarışmasıdır. Katılımcılar,
                    karmaşık problemleri hızla analiz ederek en verimli ve
                    optimize çözümleri üretmeye çalışacak.
                    <br />
                    <br />
                    Yarışma, algoritmik düşünme, sınırlı kaynaklarla en ideal
                    çözümü geliştirme ve takım çalışması becerilerini ölçerken,
                    katılımcılara rekabetçi programlama dünyasında kendilerini
                    kanıtlama fırsatı sunuyor.
                </div>
            </div>
            <img src="svg/computer-image.svg" className={styles['img']}/>
        </section>
    );
}
