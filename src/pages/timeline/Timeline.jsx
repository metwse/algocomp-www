import { Header, ListItem } from './components';
import styles from './Timeline.module.scss'


export default function Timeline() {
    return (
        <section id="timeline" className={styles['timeline']}>
            <h2>Zaman Çizelgesi</h2>
            <div className={styles['list']}>
                <Header>Kayıtlar</Header>
                <ListItem time="21 Mart 23.59">algoComp'24 için son başvuru tarihi.</ListItem>
                <Header>Ön eleme süreci</Header>
                <ListItem time="22 Mart 10.30">Kick-off ve practive session.</ListItem>
                <ListItem time="22 Mart 13.00">Ön eleme etabı.</ListItem>
                <Header>Final süreci</Header>
                <ListItem time="6 Nisan">Resmî ön eleme sonuçlarının açıklanması.</ListItem>
                <ListItem time="6 Nisan 11.30-17.30 ">Final.</ListItem>
                <Header>Son</Header>
            </div>
        </section>
    );
};
