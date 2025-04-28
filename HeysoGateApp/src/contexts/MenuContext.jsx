import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, openMenu, closeMenu }}>
            { children }
        </MenuContext.Provider>
    )
}