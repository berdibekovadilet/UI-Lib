import React from 'react';
import styles from "./Home.module.scss";
import Button from "../../shared/ui/Button/Button";

function HomeView() {
    return (
        <main className={styles.main}>
            <div className="row">
                <Button>details</Button>
                <Button appearance="error">cancel</Button>
            </div>
        </main>
    );
}

export default HomeView;