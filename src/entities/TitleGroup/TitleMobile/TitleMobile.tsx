import React from 'react';
import styles from "./TitleMobile.module.scss";

export function TitleMobile() {
    return (
        <h1 className={styles.title}>
            <div className={styles.firstRow}>mockup</div>
            <div className={styles.secondRow}>collection</div>
            <div className={styles.thirdRow}>for designers</div>
        </h1>
    );
}

