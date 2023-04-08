import React from 'react';
import styles from "./Home.module.scss";
import {Title, TitleMobile} from "../../entities/TitleGroup";
import useWindowSize from "../../shared/hooks/useWindowSize";

function HomeView() {
    const {innerWidth} = useWindowSize()
    const isMobileScreen = Number(innerWidth) < 768;
    return (
        <main className={styles.main}>
            {isMobileScreen ? <TitleMobile/> : <Title/>}
        </main>
    );
}

export default HomeView;