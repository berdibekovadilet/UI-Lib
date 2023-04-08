export interface MenuItem {
    id: string;
    text: string;
    anchor: string;
}

export interface NavbarProps {
    logo: string;
    menuItems: MenuItem[];
    icon: string;
}