import React, { useEffect, useRef } from "react";
import { useMenu } from "../contexts/MenuContext";
import { NavLink } from 'react-router-dom';
import AppRoutes from "./AppRoutes";

function Menu() {
    const { isMenuOpen, closeMenu } = useMenu();
    const menuRef = useRef(null);

    useEffect(() => {
        const body = document.body;

        if (isMenuOpen) {
            body.classList.add('is-menu-visible');
        } else {
            body.classList.remove('is-menu-visible');
        }

        return () => {
            body.classList.remove('is-menu-visible');
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        const handleEsc = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [closeMenu]);

    return (
        <nav ref={menuRef} id="menu" className={isMenuOpen ? 'visible' : ''} >
            <div className="inner">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <NavLink to="/Home" onClick={closeMenu}>Home</NavLink>
                        {/* <a href="/">Home</a> */}
                    </li>
                    <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
                    <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
                    <li><a href="generic.html">Blog</a></li>
                    <li><a href="elements.html">Others</a></li>
                </ul>
            </div>
            <a className="close" href="#menu" onClick={(e) => {
                e.preventDefault();
                closeMenu();
            }}>Close</a>
        </nav>
    );
}

export default Menu;