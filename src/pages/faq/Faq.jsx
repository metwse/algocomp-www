import Footer from "../../components/footer/Footer"
import Question from "./Question"
import Glow from "../../components/glow/Glow"

import styles from "./Faq.module.scss"


export default function Faq() {
    return (
        <section id="faq" className={`full-page ${styles['faq']}`}>
            <div>
                <h2>Sıkça Sorulan Sorular</h2>
                <div className={styles['questions']}>
                    <Question title="Kimler katılabilir?">
                        Yarışmanın düzenlenmesinde görev almamış üniversitede
                        ön lisans/lisans eğitimi alan öğrenciler katılabilir.
                    </Question>
                    <Question title="Bireysel olarak başvuru yapabilir miyim?">
                        Evet, bireysel olarak başvuru yapabilirsiniz.
                    </Question>
                    <Question title="Bireysel olarak başvuranlar başka takımlara atanacak mı?">
                        Hayır, bireysel olarak katılmak isteyenler bireysel
                        olarak yarışacaklardır.
                    </Question>
                    <Question title="Takımlar kaç kişi olabilir?">
                        Takımlar en fazla 3 kişi olmalıdır.
                    </Question>
                    <Question title="Nasıl takım halinde başvuru yapabiliriz?">
                        <a
                            href="https://algoleague.com/contest/algocomp25-qualification-round/description"
                            target="_blank"
                        >
                            Bu link
                        </a> üzerinden takımınızdaki yarışmacı sayısını
                        belirterek başvurabilirsiniz.
                    </Question>
                    <Question title="Yarışmaya nasıl hazırlanabilirim?">
                        Konu çalışmak için Algoritma 101 eğitimimizin
                        materyallerini <a href="https://github.com/ituacm/ITU-ACM-22-23-Algo101">buradan</a>  inceleyebilir, ITU ACM Student
                        Chapter YouTube kanalında yayınlanan <a href="https://www.youtube.com/playlist?list=PLtEjlLntE5eBLxL2kMStBKMMgbBzS-p0D">algoritma soru
                        çözümü serisini</a> izleyebilir ve 100'den fazla sorunun
                        editorial'ını yazdığımız arşive <a href="https://github.com/ituacm/ITU-ACM-AlgoTeam">buradan</a> erişebilirsiniz.
                    </Question>
                    <Question title="Etkinlik nerede yapılacak?">
                        Etkinliğimiz ön elemede çevrim içi olarak algoleague
                        platformu üzerinden gerçekleştirilecektir. Final etabı
                        İstanbul'da, İTÜ Bilgisayar Bilişim Fakültesinde
                        yüzyüze gerçekleşecektir!
                    </Question>
                    <Question title="Katılımcılar birden fazla takımda yer alabilir mi?">
                        Hayır, her katılımcı sadece bir takımda yer almalıdır.
                    </Question>
                    <Question title="Hangi takımlar ödül almaya hak kazanacak?">
                        Final etabı sonunda ilk 6 takım büyük ödüllerin sahibi
                        olacaktır.
                    </Question>
                    <Question title="Ödüller nasıl teslim edilecek?">
                        Yarışma sonunda belirlenecek ilk beş takım ödüllerini
                        Amazon Hediye çeki olarak alacaktır.
                    </Question>
                </div>
            </div>
            <Glow className={styles['glow1']} />
            <Glow className={styles['glow2']} />
            <Footer />
        </section>
    );
}
