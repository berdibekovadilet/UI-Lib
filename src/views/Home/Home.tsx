import React from 'react';
import styles from "./Home.module.scss";
import {Title, TitleMobile} from "../../entities/TitleGroup";
import useWindowSize from "../../shared/hooks/useWindowSize";
import {Navbar, NavbarMobile} from "../../widgets/NavbarGroup";
import {menuItems, menuItemsMobile} from "../../widgets/NavbarGroup/MenuItems";
import Logo from "public/Logo.svg"
import ShoppingCart from "public/ShoppingCart.svg"


function HomeView() {
    const {innerWidth} = useWindowSize()
    const isMobileScreen = Number(innerWidth) < 768;
    return (
        <>
            {isMobileScreen ?  <NavbarMobile menuItems={menuItemsMobile} logo={Logo} icon={ShoppingCart}/> :  <Navbar menuItems={menuItems} logo={Logo} icon={ShoppingCart}/>}

            <main className={styles.main}>
                {isMobileScreen ? <TitleMobile/> : <Title/>}
            </main>
        </>

    );
}

export default HomeView;