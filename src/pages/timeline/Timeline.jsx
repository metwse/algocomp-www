import { Header, ListItem } from "./components";
import styles from "./Timeline.module.scss";

export default function Timeline() {
    return (
        <section id="timeline" className={styles["timeline"]}>
            <h2>Zaman Çizelgesi</h2>
            <Header>Kayıtlar</Header>
            <ListItem time="22 Mart 12.30">
                algoComp'25 için son başvuru tarihi.
            </ListItem>
            <Header>Ön eleme süreci</Header>
            <ListItem time="22 Mart 10.30">
                Kick-off ve practive session.
            </ListItem>
            <ListItem time="22 Mart 13.00 - 23.59">
                Online ön eleme etabı.
            </ListItem>
            <ListItem time="27 Mart">
                Resmî ön eleme sonuçlarının açıklanması.
            </ListItem>
            <Header>Final süreci</Header>
            <ListItem time="6 Nisan 11.30 - 17.30 ">
                Yüz yüze final etabı.</ListItem>
            <Header>Son</Header>
        </section>
    );
}
