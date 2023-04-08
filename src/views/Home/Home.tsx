import React from 'react';
import styles from "./Home.module.scss";
import {Title, TitleMobile} from "../../entities/TitleGroup";
import useWindowSize from "../../shared/hooks/useWindowSize";
import {Navbar, NavbarMobile} from "../../widgets/NavbarGroup";
import {menuItems, menuItemsMobile} from "../../widgets/NavbarGroup/MenuItems";
import Logo from "public/Logo.svg"
import ShoppingCart from "public/ShoppingCart.svg"
import {ProductSlider} from "../../entities/ProductSlider";

const images = [
    "https://images.unsplash.com/photo-1680879961218-07707f20c2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1680775542464-c4140fb770e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    "https://images.unsplash.com/photo-1680699641100-4b40426109d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1680866107561-0dd6b6498971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];


function HomeView() {
    const {innerWidth} = useWindowSize()
    const isMobileScreen = Number(innerWidth) < 768;
    return (
        <>
            {isMobileScreen ? <NavbarMobile menuItems={menuItemsMobile} logo={Logo} icon={ShoppingCart}/> :
                <Navbar menuItems={menuItems} logo={Logo} icon={ShoppingCart}/>}
            <main className={styles.main}>
                {isMobileScreen ? <TitleMobile/> : <Title/>}
                <ProductSlider images={images}/>
            </main>
        </>

    );
}

export default HomeView;