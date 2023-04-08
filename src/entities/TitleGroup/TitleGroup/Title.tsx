import React from 'react';
import styles from "./Title.module.scss";

export const Title = () => {
    return (
        <h1 className={styles.title}>
            <div className={styles.firstRow}>mockup collection</div>
            <div className={styles.secondRow}>for designers</div>
        </h1>
    );
}

