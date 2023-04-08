import React from 'react';
import {NavbarProps} from "../types";
import Image from "next/image";
import styles from "./Navbar.module.scss"


export const Navbar: React.FC<NavbarProps> = ({logo, icon, menuItems}) => {
    return (
        <div className={styles.container}>
            <div className="logo">
                <Image src={logo} alt={logo}/>
            </div>
            <div className={styles.menu}>
                {menuItems.map((item) => (
                    <a key={item.id} href={item.anchor} className="navbar__menu-item">
                        {item.text}
                    </a>
                ))}
                <div className={styles.icon}>
                    <Image src={icon} alt="Icon"/>
                </div>
            </div>
        </div>
    );
};

