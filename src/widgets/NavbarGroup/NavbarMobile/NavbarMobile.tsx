import React, {useState} from 'react';
import styles from "../NavbarMobile/NavbarMobile.module.scss";
import Image from "next/image";
import {NavbarProps} from "../types";
import MenuIcon from "public/Menu.svg"
import CloseIcon from "public/Close.svg"

export const NavbarMobile: React.FC<NavbarProps> = ({logo, icon, menuItems}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className={styles.container}>
            {menuOpen ? (
                <>
                    <div className="logo">
                        <Image src={logo} alt={logo}/>
                    </div>
                    <div className={styles.showMenu}>
                        <div className={styles.icon} onClick={() => setMenuOpen(false)}>
                            <Image src={CloseIcon} alt="Icon"/>
                        </div>
                        <div className={styles.menuList}>
                            {menuItems.map((item) => (
                                <a key={item.id} href={item.anchor} className={styles.menuItem}>
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="logo">
                        <Image src={logo} alt={logo}/>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.icon}>
                            <Image src={icon} alt="Icon"/>
                        </div>
                        <div className={styles.icon} onClick={() => setMenuOpen(!menuOpen)}>
                            <Image src={MenuIcon} alt="MenuIcon"/>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
};
