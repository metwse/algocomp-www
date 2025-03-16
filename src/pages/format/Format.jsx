import styles from "./Format.module.scss";

export default function Format() {
  return (
    <section id="format" className={styles["format"]}>
      <div>
        <h3>Yarışma Formatı</h3>
        <div>
          algoComp’25 ön eleme ve final olmak üzere iki etaptan oluşmaktadır.
          <br />
          <br />
          22 Mart tarihinde düzenlenecek olan ön eleme aşamasında yarışmacıların
          11 saatte 7-10 adet algoritma sorusuna çözüm bulmaları gerekmektedir.
          En kısa sürede en çok puan toplayan 15 takım finalist olmaya hak
          kazanacaktır.
          <br />
          <br />
          24 Şubat 2024 tarihinde düzenlenecek olan final etabında ise
          yarışmacıların ön eleme etabından daha zorlayıcı 8-11 algoritma
          sorusuna 6 saat içerisinde çözüm bulmaları gerekmektedir. En çok puan
          toplayan 5 takım büyük ödüllerin sahibi olacaktır.
        </div>
      </div>
      <div>
        <h3>Katılım Kuralları</h3>
        <p>
          Başvurular 11 Şubat 2024 tarihine kadar yapılmalıdır, bu tarihten
          sonra başvuru alınmayacaktır ve yarışmacı kayıtları
          sonlandırılacaktır.
          <br />
          <br />
          Yarışmaya katılmak isteyenler 2 veya 3 kişilik takımlar halinde ya da
          bireysel olarak başvuru yapabilirler. Takım halinde katılmak
          isteyenlerin takım arkadaşları ile birlikte başvuru yapmaları
          gerekmektedir. Ayrı ayrı başvuru yapan katılımcılar farklı takım
          sayılacaktır ve takım halinde yarışamayacaklardır.
          <br />
          <br />
          Yarışmaya üniversitede ön lisans/lisans eğitimi alan öğrenciler
          katılabilir.
          <br />
          <br />
          algoComp'un düzenlenmesinde görev almış öğrenciler yarışmaya
          katılamamaktadır.
        </p>
      </div>
      <div>
        <h3>Puanlama ve Sıralama</h3>
        <p>
          Her çözüm, soru ekibimiz tarafından hazırlanmış belirli testlerden
          geçirilecektir. Testler sonucunda, takımlar tüm testleri geçtikleri
          takdirde puan kazanacaktır.
          <br />
          <br />
          Sıralamada öncelikli olarak takımların topladıkları puanlar göz önüne
          alınacaktır. Birden fazla takımın eşit puan alması durumunda bu puanı
          daha kısa sürede toplayan takım sıralamada diğerlerinin önüne
          geçecektir.
        </p>
      </div>
    </section>
  );
}
